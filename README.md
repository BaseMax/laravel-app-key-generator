# Laravel App Key Generator

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

A lightweight, browser-based tool to generate secure and valid Laravel APP_KEY values for your Laravel projects. This utility creates a 32-byte random key encoded in Base64 format - the same format Laravel uses for encryption. No installation or PHP environment required. Open-source, privacy-friendly (no server calls), and designed to help developers quickly copy-paste secure keys into their .env file. Built entirely with HTML, CSS, and JavaScript.

> Easily generate a secure and random Laravel `APP_KEY` for your Laravel applications.

🔗 **Live Preview:**  
👉 [https://basemax.github.io/laravel-app-key-generator/](https://basemax.github.io/laravel-app-key-generator/)

📦 **GitHub Repository:**  
👉 [https://github.com/BaseMax/laravel-app-key-generator](https://github.com/BaseMax/laravel-app-key-generator)

---

## 💡 What is this?

A fast, browser-based tool to generate a new Laravel `APP_KEY` using JavaScript — no PHP or server needed.

---

## ✨ Features

- 🔐 Generates a valid `base64:` Laravel APP_KEY
- 📋 Copy-to-clipboard functionality
- 🧠 MIT Licensed and open-source
- ⚡ Fast and lightweight
- 🔒 Fully client-side, no backend calls

---

## 🚀 Usage

1. Open the [Live Preview](https://basemax.github.io/laravel-app-key-generator/).
2. Click the **"Generate"** button.
3. Click **"Copy"** to copy the key to your clipboard.
4. Add it to your `.env` file:
   ```env
   APP_KEY=base64:your-generated-key
   ```

## 🧪 Example Output

```bash
base64:8Fmdmh3EfDw+67piVNMEaqe+dLoHcIUhNn9C7VJ3XOE=
```

## 🛠️ Development

Clone the repository and open index.html in your browser:

```bash
git clone https://github.com/BaseMax/laravel-app-key-generator.git
cd laravel-app-key-generator
open index.html
```

## 🙌 Credits

Created by Max Base

Inspired by the Laravel framework and its need for strong encryption keys.

## 🔗 Related Links

[Laravel Docs: Application Key](https://laravel.com/docs/configuration#application-key)

## 📄 License

MIT License © 2025 Max Base
