"""
eTMF 王 · 微信群推广图生成器（v2 现代版）
输出：share-card.png (1080x1080)

设计要点：
- 深色质感背景 + 光晕 + 点阵装饰（替代旧版的粗网格）
- 价值主张标题（扫描 · 识别 · 归档 / 现场文件一次搞定）
- 能力胶囊标签 + 精致二维码白卡
- 微信原生引导语「长按识别二维码」
"""

from __future__ import annotations

from pathlib import Path

import qrcode
from PIL import Image, ImageDraw, ImageFilter, ImageFont

# ---------------- 配置 ----------------
URL = "https://0e4c611db7b643b4a0f4ccbd16d457fc.app.workbuddy.link"
SIZE = 1080

# 品牌色
DEEP_NAVY = (7, 24, 40)
BLUE_GLOW = (11, 111, 212)
LIME = (183, 243, 74)
WHITE = (255, 255, 255)
WHITE_62 = (255, 255, 255, 158)
WHITE_45 = (255, 255, 255, 115)
GREY_TEXT = (93, 111, 130)

FONT_HEITI = "/System/Library/Fonts/STHeiti Medium.ttc"  # index 1 = Heiti SC Medium
FONT_HIRAGINO = "/System/Library/Fonts/Hiragino Sans GB.ttc"  # index 0 = W3

PROJECT_DIR = Path("/Users/q/WorkBuddy/eTMF App/种子用户招募网站")
ICON_PATH = PROJECT_DIR / "public" / "app-icon.png"
OUTPUT_PATH = PROJECT_DIR / "share-card.png"

CHIPS = [
    ["智能匹配", "规范命名", "批量导出", "文件清单"],
]


def f_heiti(size: int) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(FONT_HEITI, size=size, index=1)


def f_body(size: int) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(FONT_HIRAGINO, size=size, index=0)


def text_w(draw, text, font_obj) -> int:
    b = draw.textbbox((0, 0), text, font=font_obj)
    return b[2] - b[0]


def centered(draw, text, font_obj, cx, y_top, fill):
    """以 cx 为水平中心、y_top 为顶边绘制文本。"""
    b = draw.textbbox((0, 0), text, font=font_obj)
    w = b[2] - b[0]
    draw.text((cx - w // 2 - b[0], y_top - b[1]), text, font=font_obj, fill=fill)
    return b[3] - b[1]


def rounded_mask(size, radius):
    m = Image.new("L", size, 0)
    ImageDraw.Draw(m).rounded_rectangle([(0, 0), size], radius=radius, fill=255)
    return m


def make_qr(url, size):
    qr = qrcode.QRCode(
        version=None,
        error_correction=qrcode.constants.ERROR_CORRECT_H,
        box_size=10,
        border=3,
    )
    qr.add_data(url)
    qr.make(fit=True)
    img = qr.make_image(fill_color="#071828", back_color="white").convert("RGBA")
    return img.resize((size, size), Image.LANCZOS)


def build_background():
    """深蓝底 + 光晕 + 点阵装饰。"""
    base = Image.new("RGBA", (SIZE, SIZE), DEEP_NAVY)

    # 光晕层
    glow = Image.new("RGBA", (SIZE, SIZE), (0, 0, 0, 0))
    gd = ImageDraw.Draw(glow)
    gd.ellipse([520, -320, 1420, 480], fill=(*BLUE_GLOW, 165))   # 右上蓝光
    gd.ellipse([-260, 760, 460, 1420], fill=(*LIME, 46))          # 左下绿光
    gd.ellipse([700, 620, 1180, 1080], fill=(*BLUE_GLOW, 55))    # 右下补光
    glow = glow.filter(ImageFilter.GaussianBlur(140))
    base.alpha_composite(glow)

    # 点阵装饰（仅上半部，避免干扰二维码区）
    dots = Image.new("RGBA", (SIZE, SIZE), (0, 0, 0, 0))
    dd = ImageDraw.Draw(dots)
    step, r = 46, 1
    for y in range(40, 430, step):
        for x in range(30, SIZE - 30, step):
            dd.ellipse([x - r, y - r, x + r, y + r], fill=(140, 200, 255, 34))
    base.alpha_composite(dots)

    return base


def main():
    canvas = build_background()
    draw = ImageDraw.Draw(canvas)

    # ---- 1. 品牌行（左对齐：icon + 名称 + 徽章） ----
    icon = Image.open(ICON_PATH).convert("RGBA").resize((64, 64), Image.LANCZOS)
    icon_mask = rounded_mask((64, 64), 15)
    icon.putalpha(icon_mask)
    icon_x, icon_y = 76, 78
    canvas.alpha_composite(icon, (icon_x, icon_y))
    icon_cy = icon_y + 32

    brand_text = "eTMF 王"
    brand_font = f_heiti(38)
    b = draw.textbbox((0, 0), brand_text, font=brand_font)
    tw, th = b[2] - b[0], b[3] - b[1]
    tx = icon_x + 64 + 18
    draw.text((tx - b[0], icon_cy - th // 2 - b[1]), brand_text,
              font=brand_font, fill=WHITE)

    # 内测中徽章
    badge_font = f_body(20)
    badge_text = "内测中"
    bw = text_w(draw, badge_text, badge_font) + 28
    bx = tx + tw + 18
    by = icon_cy - 17
    badge = Image.new("RGBA", (bw, 34), (0, 0, 0, 0))
    ImageDraw.Draw(badge).rounded_rectangle(
        [(0, 0), (bw - 1, 33)], radius=17, outline=(*LIME, 190), width=1)
    canvas.alpha_composite(badge, (bx, by))
    bd = ImageDraw.Draw(canvas)
    bb = bd.textbbox((0, 0), badge_text, font=badge_font)
    bd.text((bx + (bw - (bb[2] - bb[0])) // 2 - bb[0],
             by + (34 - (bb[3] - bb[1])) // 2 - bb[1]),
            badge_text, font=badge_font, fill=(*LIME, 235))

    # ---- 2. 主标题 ----
    t1 = "扫描 · 识别 · 导出"
    title_font = f_heiti(66)
    centered(draw, t1, title_font, SIZE // 2, 248, LIME)

    sub_font = f_body(28)
    centered(draw, "面向CRA、CRC的临床试验文件收集工具",
             sub_font, SIZE // 2, 356, WHITE_62)

    # ---- 3. 能力胶囊（两行居中） ----
    chip_font = f_body(24)
    chip_h, gap, pad_x = 44, 12, 22
    cy = 416
    for row in CHIPS:
        widths = [text_w(draw, c, chip_font) + pad_x * 2 for c in row]
        total = sum(widths) + gap * (len(row) - 1)
        cx = (SIZE - total) // 2
        for text, w in zip(row, widths):
            chip = Image.new("RGBA", (w, chip_h), (0, 0, 0, 0))
            cd = ImageDraw.Draw(chip)
            cd.rounded_rectangle([(0, 0), (w - 1, chip_h - 1)], radius=chip_h // 2,
                                 fill=(255, 255, 255, 26), outline=(255, 255, 255, 46))
            canvas.alpha_composite(chip, (cx, cy))
            cd2 = ImageDraw.Draw(canvas)
            b = cd2.textbbox((0, 0), text, font=chip_font)
            cd2.text((cx + (w - (b[2] - b[0])) // 2 - b[0],
                      cy + (chip_h - (b[3] - b[1])) // 2 - b[1]),
                     text, font=chip_font, fill=(255, 255, 255, 225))
            cx += w + gap
        cy += chip_h + 12

    # ---- 4. 二维码白卡 ----
    card_w, card_h = 600, 520
    card_x = (SIZE - card_w) // 2
    card_y = 490

    # 阴影
    shadow = Image.new("RGBA", (card_w + 60, card_h + 60), (0, 0, 0, 0))
    ImageDraw.Draw(shadow).rounded_rectangle(
        [(30, 30), (card_w + 29, card_h + 29)], radius=30, fill=(0, 0, 0, 105))
    shadow = shadow.filter(ImageFilter.GaussianBlur(26))
    canvas.alpha_composite(shadow, (card_x - 30, card_y - 22))

    # 白卡
    card = Image.new("RGBA", (card_w, card_h), WHITE)
    card.putalpha(rounded_mask((card_w, card_h), 30))
    canvas.alpha_composite(card, (card_x, card_y))

    # 二维码
    qr_size = 400
    qr = make_qr(URL, qr_size)
    qr_x = card_x + (card_w - qr_size) // 2
    qr_y = card_y + 26
    canvas.alpha_composite(qr, (qr_x, qr_y))

    # 中心 logo
    inner = 68
    badge = Image.new("RGBA", (inner + 22, inner + 22), WHITE)
    bm = Image.new("L", badge.size, 0)
    ImageDraw.Draw(bm).ellipse([(0, 0), badge.size], fill=255)
    badge.putalpha(bm)
    logo = Image.open(ICON_PATH).convert("RGBA").resize((inner, inner), Image.LANCZOS)
    badge.alpha_composite(logo, (11, 11))
    canvas.alpha_composite(badge,
                           (qr_x + (qr_size - badge.size[0]) // 2,
                            qr_y + (qr_size - badge.size[1]) // 2))

    # 卡内引导语
    guide_font = f_heiti(28)
    centered(draw, "长按识别二维码 · 免费申请内测",
             guide_font, SIZE // 2, card_y + 26 + qr_size + 30, GREY_TEXT)

    OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    canvas.convert("RGB").save(OUTPUT_PATH, "PNG", optimize=True)
    print(f"[qr] 已生成: {OUTPUT_PATH}  ({OUTPUT_PATH.stat().st_size / 1024:.1f} KB)")


if __name__ == "__main__":
    main()
