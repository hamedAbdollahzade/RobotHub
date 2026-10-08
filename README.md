# روبات مارکت — لینک‌هاب PWA

https://hamedabdollahzade.github.io/RobotHub/


یک صفحه‌ی ساده و ریسپانسیو (Next.js 14 / App Router) که چند آیتم رو به‌صورت گرید نشون می‌ده و با کلیک/تاچ روی هرکدوم، لینک مربوطه باز می‌شه. لینک‌های وب در تب جدید باز می‌شن و تماس تلفنی مستقیم با شماره‌گیر دستگاه باز می‌شه. خروجی پروژه استاتیکه و برای GitHub Pages آماده شده.

## اجرا روی سیستم خودتون

```bash
npm install
npm run dev
```

بعد آدرس `http://localhost:3000` رو باز کنید.

برای build نهایی:

```bash
npm run build
```

برای build مخصوص GitHub Pages:

```bash
npm run build:github
```

خروجی داخل پوشه‌ی `out` ساخته می‌شه.

> نکته: PWA (service worker) فقط بعد از build و روی هاست production یا localhost فعال می‌شه، نه در `npm run dev`.

## انتشار روی GitHub Pages

این پروژه workflow آماده دارد: `.github/workflows/deploy.yml`.

1. پروژه را روی شاخه‌ی `main` پوش کنید.
2. در GitHub به Settings → Pages بروید.
3. Source را روی **GitHub Actions** بگذارید.
4. workflow به‌صورت خودکار build می‌گیرد و پوشه‌ی `out` را منتشر می‌کند.

با توجه به نام repo فعلی، آدرس Pages این شکلی خواهد بود:

```text
https://hamedAbdollahzade.github.io/RobotHub/
```

## اضافه/ویرایش کردن آیتم‌ها

فایل `data/items.json` رو باز کنید. هر آیتم این شکلیه:

```json
{
  "id": "website",
  "title": "وب‌سایت",
  "description": "my-rm.com",
  "url": "https://my-rm.com/",
  "icon": "store"
}
```

- `id`: یکتا و انگلیسی (فقط برای React لازمه)
- `title` / `description`: متنی که روی کارت نشون داده می‌شه (description اختیاریه، می‌تونید حذفش کنید)
- `url`: لینک مقصد. برای شماره تلفن از `tel:+98...` و برای ایمیل از `mailto:...` استفاده کنید
- `icon`: یکی از آیکون‌های آماده در `components/icons.js`: `store, grid, instagram, telegram, whatsapp, youtube, chat, phone, link`

برای اضافه کردن آیکون جدید، یک `<svg>` جدید به آبجکت `icons` در `components/icons.js` اضافه کنید و کلیدش رو در `items.json` استفاده کنید.

**ترتیب آیتم‌ها = ترتیبی که در فایل JSON نوشته‌اید** (چون سایت راست‌به‌چپه، آیتم اول از راست بالا شروع می‌شه).

## تغییر رنگ و ظاهر

همه‌ی رنگ‌ها به‌صورت متغیر CSS در ابتدای فایل `app/globals.css` تعریف شدن:

```css
--primary: #00a693;       /* رنگ اصلی برند */
--primary-bright: #22e0c4; /* رنگ درخشان‌تر برای هاور/فوکوس */
--bg: #0a0f0e;             /* پس‌زمینه اصلی */
--card: #101815;           /* پس‌زمینه کارت‌ها */
```

فقط همین چند خط رو عوض کنید تا کل تم تغییر کنه.

## آیکون‌ها و لوگو

- `public/logo.png` — همون لوگوی اصلی که در هدر صفحه نشون داده می‌شه
- `public/icons/` — آیکون‌های PWA که از روی لوگو به‌صورت خودکار ساخته شدن (192، 512، maskable، اپل، فاویکون)

اگه لوگو عوض شد، کافیه `public/logo.png` رو جایگزین کنید و اسکریپت تولید آیکون رو دوباره اجرا کنید (یا خودتون آیکون‌های جدید رو در همون سایزها جایگزین کنید).

## نصب PWA روی موبایل/دسکتاپ

بعد از دیپلوی (یا حتی روی `npm run build && npm run start` با HTTPS/localhost):
- **اندروید/کروم:** پیام «افزودن به صفحه اصلی» خودکار ظاهر می‌شه یا از منوی سه‌نقطه.
- **iOS/سافاری:** دکمه Share → «Add to Home Screen».
- **دسکتاپ کروم/اج:** آیکون نصب کنار آدرس‌بار.

## فونت

فونت وزیرمتن به‌صورت لوکال در `public/fonts/Vazirmatn-Variable.woff2` قرار داره (self-hosted)، پس نیازی به اتصال به گوگل‌فونتز نیست و سایت آفلاین هم درست لود می‌شه.
