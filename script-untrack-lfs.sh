#!/bin/bash

echo "🚫 Untracking public/ จาก Git LFS..."
git lfs untrack "public/images/*"
git lfs untrack "public/pdfs/*"

echo "🧹 ลบ .gitattributes หากมี..."
rm -f .gitattributes

echo "🔄 ลบไฟล์จาก Git cache..."
git rm --cached -r public/images public/pdfs

echo "➕ เพิ่มไฟล์แบบปกติ..."
git add public/images public/pdfs

echo "📦 Commit การเปลี่ยนแปลง..."
git commit -m "Remove public/images and public/pdfs from Git LFS"

echo "🚀 Push ขึ้น GitHub..."
git push origin main

echo "✅ เสร็จเรียบร้อย! อย่าลืม redeploy ที่ Vercel"
