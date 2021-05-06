find . -type f | grep '.*[.]sh'| sed "s/...$//"| sed 's/.*\///'
