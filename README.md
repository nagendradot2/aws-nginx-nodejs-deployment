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
✅ Use npm init -y first (Best Practice)
Step 1:
npm init -y

Creates:

{
  "name": "my-app",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  }
}
Step 2:
npm install express

Now it updates properly:

{
  "name": "my-app",
  "version": "1.0.0",
  "dependencies": {
    "express": "^4.18.2"
  }
}
🔥 Why this matters (VERY IMPORTANT in real projects)
1. 📦 Dependency tracking

Your project now clearly says:
👉 “I need Express to run”

2. 🤝 Sharing code (team / Git)

If someone clones your repo:

npm install

👉 installs everything automatically

Without package.json → ❌ project won’t run

3. 🚀 Scripts (super useful)

You can add:

"scripts": {
  "start": "node app.js"
}

Then just run:

npm start
4. 🔄 Version control stability

package-lock.json ensures:
👉 Same versions install everywhere
(no “it works on my machine” problem)

🔑 Final takeaway
npm init -y → sets up your project properly
npm install express → adds functionality

👉 You can skip init, but:

messy setup
bad practice in real projects
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
