# Design

### Features I want to achieve


### Problems I met
##### Task1: How to check a user is login without a lot of code?
Problems:
1. After user login with OAuth, they will have a cookie with accessToken in it,
besides the cookie, it seems there is no way to check whether the user is signed in.
2. I don't want front end handles too much logic, I want my client side to be as simple
as possible, which is after login, the client side will have some form of information
about their identity(e.g userid), so they can fetch data by their userid. 


Thoughs:
1. Now cookie is the only way for me to check the user is signed in, this cookie contains
ther user.id, which I can fetch data by the user.id. Even this is too much, how should
my back end gives my client the identity they need...


##### Task2. Request and Response difference?
1. Before res & req, need to know about HTTP.
    - HTTP is a protocol for fetching resources
    - It is a **client-server** protocol
    - **Request** is the message sent by the client
    - **Response** is the message sent by the server
    - HTTP is **stateless**(One request,One connection, two request can't happen in one connection), but cookie-session allows
    to share the same text or state(Can used for authorization)
    - Before client server can connect, they must establish a **TCP** connection, 

A Request look like
```
GET / HTTP/1.1
Host: developer.mozilla.org
Accept-Language: fr
```

A Response look like
```
HTTP/1.1 200 OK
Date: Sat, 09 Oct 2010 14:28:02 GMT
Server: Apache
Last-Modified: Tue, 01 Dec 2009 20:18:22 GMT
ETag: "51142bc1-7449-479b075b2891b"
Accept-Ranges: bytes
Content-Length: 29769
Content-Type: text/html

<!DOCTYPE html... (here come the 29769 bytes of the requested web page)
```


2. Request:
    - It contain headers, which include information like method(Post, Get, Delete etc..)
    - It is **always** the brower(client) initiate the request
    - It has a path to fetch the data
    - Optional headers that convey additional information for the servers.
3. Response:
    - It has a **Status code**, indicate the statue of the request(e.g. 200: success)
    - It has a status information(401: unanthorized)
    - A body contains the fetch information

##### Task3. Layouts in css
**Flex box**:
1. Without flex display, all the elements will layout in a row
2. Flexbox is designed for **one** dimensional layout

**Grid**
1. Grid is for **two** dimensional layout

**Inline & Inline-block & block**
- Block will take all the space
- Inline-block, It will take wider space in a line
- It will take space in a line

**Relative & Absolute**
1. If current element' parent do not have a relative, it will go to the body
2. If Absolute's parent have a ``relative``, it will position itself in it's parent


##### Task4. Required not work in html
1. Make sure all the input elements are inside of ```<form></form>```
2. Make sure you have an element ```type="onSubmit"```
3. Use ```onSubmit``` not ```onClick``` as a attribute in **form** not **button**

