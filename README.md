# 🚀 NGINX Reverse Proxy with Node.js on AWS EC2

## 📌 Project Overview

This project demonstrates how to deploy a Node.js application behind an NGINX reverse proxy on an AWS EC2 instance.

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* NGINX
* AWS EC2 (Ubuntu)

---

## ⚙️ Setup Steps

### 1. Install NGINX

```bash
sudo apt update -y
sudo apt install nginx -y
```

---

### 2. Allow HTTP & HTTPS Traffic

* Go to EC2 → Security Groups
* Add inbound rules:

  * HTTP (80)
  * HTTPS (443)

---

### 3. Create Frontend Files

Location:

```
/var/www/html
```

Files:

* index.html
* style.css
* script.js

---

### 4. Install Node.js

```bash
sudo apt install nodejs npm -y
```

---

### 5. Create Backend App

```bash
mkdir ~/node-backend
cd ~/node-backend
npm init -y
npm install express
```

---

### 6. Fix Static Files Issue

```bash
mkdir public
mv /var/www/html/* public/
```

---

### 7. Run Server

```bash
node server.js
```

---

### 8. Configure NGINX Reverse Proxy

Edit:

```
/etc/nginx/sites-available/default
```

Update:

```
location / {
    proxy_pass http://localhost:5000;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
}
```

Restart NGINX:

```bash
sudo systemctl restart nginx
```

---

## 🌐 Access Application

```
http://<EC2-PUBLIC-IP>
```

---

## ❗ Common Issue

**Cannot GET /**
Fix:

* Ensure static files are inside `/public`
* Use Express static middleware:

```js
app.use(express.static('public'));
```

---

## 📚 Learnings

* NGINX reverse proxy
* Node.js deployment
* AWS EC2 setup
* Static file serving in Express

---

## 👨‍💻 Author

Nagendra BS
