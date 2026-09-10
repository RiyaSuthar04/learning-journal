#!/bin/bash

mkdir grep-example
cd grep-example

touch file1.txt
echo "123.33.44 GET/users 200 OK" >> file1.txt
echo "123.33.44 get/users 404 Not Found" >> file1.txt
echo "123.33.44 GET/users 500 Internal Server Error" >> file1.txt
echo "123.33.44 POST/users 201 Created" >> file1.txt
echo "123.33.44 POST/users 400 Bad Request" >> file1.txt

echo ""
echo "Contents of file1.txt:"

cat file1.txt

echo ""
echo "Search for lines containing 'GET' in file1.txt:"

grep "GET" file1.txt

echo ""
echo "Search for lines containing 'OK' in file1.txt:"
grep --color=auto "OK" file1.txt

echo ""
echo "count of lines containing 'OK' in file1.txt:"
# Count the number of lines containing "OK" in file1.txt
grep -c "OK" file1.txt

echo ""
echo "Search for lines that do not contain 'OK' in file1.txt:"
grep -v "OK" file1.txt

echo ""
echo "Search for lines containing 'internal server error' in file1.txt, ignoring case:"
grep -i "internal server error" file1.txt

