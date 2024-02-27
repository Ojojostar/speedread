# !pip install PyPDF2
import sys
from PyPDF2 import PdfReader
import numpy as np

file = open("pdf.txt", "r")

reader = PdfReader(file.readline())

for pagenum in range(0,len(reader.pages)):
    page = reader.pages[pagenum]
    extracted_text = page.extract_text()

    file_name = f'text_{pagenum+1}.txt'
    np.savetxt(f'texts\{file_name}', [extracted_text], fmt='%s') # add inclusion of multiple pages later

# import sys
print("Command executed from Python script")
sys.stdout.flush()