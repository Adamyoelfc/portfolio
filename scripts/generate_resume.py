from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfbase import pdfmetrics
from reportlab.platypus import (
    BaseDocTemplate,
    Frame,
    HRFlowable,
    KeepTogether,
    PageTemplate,
    Paragraph,
    Spacer,
)


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "output/pdf/Adan-Fernandez-Software-Engineer-Resume.pdf"
ASSET = ROOT / "src/assets/Adan-Fernandez-Software-Engineer-Resume.pdf"

NAVY = colors.HexColor("#12314A")
INK = colors.HexColor("#202A33")
MUTED = colors.HexColor("#52616D")
RULE = colors.HexColor("#CBD4DA")
LINK = colors.HexColor("#0D5F8C")


def register_fonts():
    candidates = {
        "ResumeSans": "/System/Library/Fonts/Supplemental/Arial.ttf",
        "ResumeSans-Bold": "/System/Library/Fonts/Supplemental/Arial Bold.ttf",
    }
    for name, path in candidates.items():
        if Path(path).exists():
            pdfmetrics.registerFont(TTFont(name, path))
    return (
        "ResumeSans" if "ResumeSans" in pdfmetrics.getRegisteredFontNames() else "Helvetica",
        "ResumeSans-Bold" if "ResumeSans-Bold" in pdfmetrics.getRegisteredFontNames() else "Helvetica-Bold",
    )


BODY_FONT, BOLD_FONT = register_fonts()


class ResumeDocTemplate(BaseDocTemplate):
    def __init__(self, filename, **kwargs):
        super().__init__(filename, **kwargs)
        frame = Frame(
            self.leftMargin,
            self.bottomMargin,
            self.width,
            self.height,
            id="resume",
            leftPadding=0,
            rightPadding=0,
            topPadding=0,
            bottomPadding=0,
        )
        self.addPageTemplates(PageTemplate(id="resume", frames=[frame], onPage=self.draw_page))

    def draw_page(self, canvas, doc):
        canvas.saveState()
        canvas.setStrokeColor(RULE)
        canvas.setLineWidth(0.5)
        canvas.line(doc.leftMargin, 0.47 * inch, letter[0] - doc.rightMargin, 0.47 * inch)
        canvas.setFillColor(MUTED)
        canvas.setFont(BODY_FONT, 7.5)
        canvas.drawString(doc.leftMargin, 0.30 * inch, "Adan 'Adam' Fernandez | Software Engineer")
        canvas.drawRightString(letter[0] - doc.rightMargin, 0.30 * inch, f"Page {doc.page}")
        canvas.restoreState()


styles = getSampleStyleSheet()
styles.add(ParagraphStyle(
    name="ResumeName", fontName=BOLD_FONT, fontSize=20, leading=22,
    textColor=NAVY, alignment=TA_CENTER, spaceAfter=4,
))
styles.add(ParagraphStyle(
    name="ResumeHeadline", fontName=BODY_FONT, fontSize=10.5, leading=13,
    textColor=INK, alignment=TA_CENTER, spaceAfter=4,
))
styles.add(ParagraphStyle(
    name="ResumeContact", fontName=BODY_FONT, fontSize=8.2, leading=11,
    textColor=MUTED, alignment=TA_CENTER, spaceAfter=6,
))
styles.add(ParagraphStyle(
    name="ResumeSection", fontName=BOLD_FONT, fontSize=10.5, leading=12,
    textColor=NAVY, spaceBefore=5, spaceAfter=2, borderWidth=0,
    borderPadding=0, keepWithNext=True,
))
styles.add(ParagraphStyle(
    name="ResumeBody", fontName=BODY_FONT, fontSize=8.6, leading=11.6,
    textColor=INK, alignment=TA_LEFT, spaceAfter=3,
))
styles.add(ParagraphStyle(
    name="ResumeRole", fontName=BOLD_FONT, fontSize=9.4, leading=12,
    textColor=INK, spaceAfter=1, keepWithNext=True,
))
styles.add(ParagraphStyle(
    name="ResumeMeta", fontName=BODY_FONT, fontSize=8.3, leading=10.5,
    textColor=MUTED, spaceAfter=3, keepWithNext=True,
))
styles.add(ParagraphStyle(
    name="ResumeBullet", fontName=BODY_FONT, fontSize=8.45, leading=11.1,
    textColor=INK, leftIndent=11, firstLineIndent=-7, bulletIndent=0,
    spaceAfter=2.4,
))
styles.add(ParagraphStyle(
    name="ResumeSkills", fontName=BODY_FONT, fontSize=8.2, leading=11,
    textColor=INK, spaceAfter=2.2,
))


def section(title):
    return [
        Paragraph(title.upper(), styles["ResumeSection"]),
        HRFlowable(width="100%", thickness=0.5, color=RULE, spaceBefore=0, spaceAfter=5),
    ]


def bullet(text):
    return Paragraph(f"•&nbsp;&nbsp;{text}", styles["ResumeBullet"])


def build_story():
    story = [
        Paragraph("ADAN 'ADAM' FERNANDEZ", styles["ResumeName"]),
        Paragraph("Software Engineer | E-commerce Platforms, Backend Systems &amp; Enterprise Integrations", styles["ResumeHeadline"]),
        Paragraph(
            "Tampa, FL | Open to Remote U.S. Roles | +1 786-489-9876 | "
            "<link href='mailto:adamyoelfc@gmail.com' color='#0D5F8C'>adamyoelfc@gmail.com</link><br/>"
            "<link href='https://adamdev.me' color='#0D5F8C'>adamdev.me</link> | "
            "<link href='https://www.linkedin.com/in/adam-fernandez-330a011a8' color='#0D5F8C'>LinkedIn</link> | "
            "<link href='https://github.com/Adamyoelfc' color='#0D5F8C'>GitHub</link>",
            styles["ResumeContact"],
        ),
    ]

    story += section("Professional Summary")
    story.append(Paragraph(
        "Software Engineer building and operating e-commerce platforms, backend services, native mobile products, and enterprise integrations across multiple consumer brands. Hands-on experience with Ruby on Rails/Spree, JavaScript/TypeScript, React, React Native/Expo, Node.js, PostgreSQL, SQL Server, Docker, and production operations. Owns technical decisions, code reviews, incident response, and integrations connecting ERP, marketplaces, EDI, shipping, tax, inventory, and order-management systems.",
        styles["ResumeBody"],
    ))

    story += section("Technical Skills")
    skills = [
        ("CORE", "Ruby on Rails, Spree Commerce, JavaScript, TypeScript, React, React Native, Expo, Node.js, Express, PostgreSQL, SQL, REST APIs, Docker"),
        ("E-COMMERCE &amp; INTEGRATIONS", "SAP Business One, EDI/X12, Mirakl, CommerceHub, ECGrid, marketplace, shipping, tax, inventory, and order-management integrations"),
        ("PRODUCTION &amp; OPERATIONS", "New Relic, Git, Linux, Windows Server, background jobs, performance troubleshooting, incident response, root-cause analysis"),
        ("ADDITIONAL EXPERIENCE", "ColdFusion, C#, Python, Django, Vue.js, SQL Server"),
    ]
    for label, value in skills:
        story.append(Paragraph(f"<b>{label}:</b> {value}", styles["ResumeSkills"]))

    story += section("Professional Experience")
    current_role = [
        Paragraph("DANIELS CORPORATION - Tampa, FL", styles["ResumeRole"]),
        Paragraph("Software Engineer | Current role", styles["ResumeMeta"]),
        bullet("Own architecture, development, and production support for e-commerce and enterprise integration systems serving Laifen USA, Delphi Glass, Diamond Tech Crafts, and Jupiter Bike."),
        bullet("Build and maintain applications, backend services, APIs, and background processes using Ruby on Rails/Spree, Node.js/Express, ColdFusion, PostgreSQL, SQL Server, and Docker."),
        bullet("Design and maintain integrations connecting SAP Business One, marketplaces, EDI providers, shipping carriers, tax services, inventory systems, and order-management workflows."),
        bullet("Make technical and architectural decisions, participate in code reviews, investigate production incidents, and coordinate resolutions with internal teams and external vendors."),
        bullet("Automate order processing, data exchange, shipping, inventory, and operational workflows that previously required manual intervention."),
        bullet("Monitor production systems and troubleshoot application and database performance using New Relic, application logs, and SQL diagnostics."),
    ]
    story.append(KeepTogether(current_role))

    story.append(Spacer(1, 5))
    story.extend([
        Paragraph("HAVANA UNIVERSITY - Havana, Cuba", styles["ResumeRole"]),
        Paragraph("Computer Scientist | 2019 - 2021", styles["ResumeMeta"]),
        bullet("Contributed to computer science research and software initiatives spanning academic and practical applications."),
        bullet("Applied programming, data, and problem-solving skills to support university technology projects."),
    ])

    story.append(Spacer(1, 4))
    story.extend([
        Paragraph("BYT - Havana, Cuba", styles["ResumeRole"]),
        Paragraph("Web Developer | 2018 - 2020", styles["ResumeMeta"]),
        bullet("Built web applications for a digital solutions and marketing company, translating business needs into working product features."),
        bullet("Improved operational workflows and user experiences through custom web development."),
    ])

    story += section("Selected Projects")
    story.extend([
        Paragraph("<b>VitalCoach</b> - Offline-first React Native/Expo fitness app with AI workout planning, local SQLite data, notifications, scheduling, and Apple Health integration.", styles["ResumeBody"]),
        Paragraph("<b>GiftSwap Mobile</b> - Cross-platform React Native app with events, wishlists, real-time chat, notifications, deep links, and an Express/PostgreSQL API.", styles["ResumeBody"]),
        Paragraph("<b>Shirt Customizer</b> - Interactive React and Three.js product customizer with image upload and AI-assisted asset generation | <link href='https://shirtcustomizer.adamdev.me/' color='#0D5F8C'>Live demo</link>", styles["ResumeBody"]),
    ])

    story += section("Education")
    story.append(Paragraph(
        "<b>Bachelor's Degree in Computer Science</b><br/>Enrique Jose Varona University - Havana, Cuba",
        styles["ResumeBody"],
    ))
    return story


def generate(path):
    path.parent.mkdir(parents=True, exist_ok=True)
    document = ResumeDocTemplate(
        str(path),
        pagesize=letter,
        rightMargin=0.62 * inch,
        leftMargin=0.62 * inch,
        topMargin=0.40 * inch,
        bottomMargin=0.58 * inch,
        title="Adan 'Adam' Fernandez - Software Engineer Resume",
        author="Adan Fernandez",
        subject="Software Engineer - E-commerce Platforms, Backend Systems & Enterprise Integrations",
    )
    document.build(build_story())


if __name__ == "__main__":
    generate(OUTPUT)
    ASSET.write_bytes(OUTPUT.read_bytes())
    print(OUTPUT)
    print(ASSET)
