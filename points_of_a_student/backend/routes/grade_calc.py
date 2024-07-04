import requests
import json
import os
import warnings
from bs4 import BeautifulSoup

# Suppress only the single InsecureRequestWarning from urllib3
from requests.packages.urllib3.exceptions import InsecureRequestWarning
warnings.simplefilter('ignore', InsecureRequestWarning)

def grade_calc(studentId, studentpass, url1):
    url2 = url1 + "authenticate_user.php"
    url3 = url1 + "getResult.php"
    
    try:
        with open(os.path.join(os.getcwd(), "routes/code-credits.json")) as credits_file:
            credits_data = json.load(credits_file)
        with open(os.path.join(os.getcwd(), "routes/grade-points.json")) as grades_file:
            grades_data = json.load(grades_file)
    except Exception as e:
        print(f"Error loading JSON files: {e}")
        return None

    try:
        r = requests.get(url1, verify=False)  # to get csrf token
        r.raise_for_status()  # check for request errors
        soup = BeautifulSoup(r.content, 'html5lib')
        token1 = soup.find(id="token")["value"]

        body2 = {
            "token": token1,
            "StudentId1": studentId,
            "StudentDob1": studentpass
        }
        headers2 = {
            "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/115.0",
            "Accept": "*/*",
            "Accept-Language": "en-US,en;q=0.5",
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            "X-Requested-With": "XMLHttpRequest",
            "Sec-Fetch-Dest": "empty",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Site": "same-origin"
        }
        
        response2 = requests.post(url=url2, headers=headers2, data=body2, verify=False)
        response2.raise_for_status()  # check for request errors

        phpsesid = response2.headers["Set-Cookie"][10:36]
        cookies3 = {"PHPSESSID": phpsesid}
        token1 = token1[:-2]
        body3 = {"SID": studentId, "token": token1}
        
        response3 = requests.post(url=url3, headers=headers2, data=body3, cookies=cookies3, verify=False)
        response3.raise_for_status()  # check for request errors

        soup = BeautifulSoup(response3.content, "html5lib")
        table1 = soup.find("table", attrs={"class": "table table-bordered"})
        rows = table1.find_all("tr")[1:]

        student1 = {}
        for row in rows:
            cols = row.find_all("td")
            student1[cols[3].text] = cols[4].text

        student_creds = 0
        sum_of_creds = 0
        for i in student1:
            x = float(credits_data[i])
            y = grades_data[student1[i]]
            student_creds += (x * y)
            sum_of_creds += x

        answer = round((student_creds / sum_of_creds), 3)
        return answer
    except Exception as e:
        print(f"Error processing request: {e}")
        return None
