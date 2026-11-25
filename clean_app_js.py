import re

path = r'C:\Users\Abusadeh\.gemini\antigravity\scratch\HarrietLanePWA\app.js'
with open(path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_lines = []
for line in lines:
    if 'لم يتم العثور على' in line:
        line = '    opt.textContent = `No drug found matching "${query}" - Select for Custom Dose Calculation`;\n'
    elif 'حاسبة مخصصة لأي' in line:
        line = "  customOpt.textContent = '⚙️ Custom Calculator for any other drug';\n"
    elif 'الحاسبة المخصصة تتيح' in line:
        line = "    calcNotesText.textContent = 'Custom mode allows calculating any pediatric regimen based on custom dose and available formulation concentration.';\n"
    elif 'تم فتح الحاسبة المخصصة' in line:
        line = "    showToast('Opened Custom Dose Calculator');\n"
    elif 'mLغ / اليوم' in line:
        line = line.replace('mLغ / اليوم', 'mg / day')
    elif 'دواء متاح' in line:
        line = line.replace('دواء متاح', 'drugs available')
    new_lines.append(line)

with open(path, 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

print("Updated app.js cleanly.")
