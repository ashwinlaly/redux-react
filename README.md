openssl req -new -newkey rsa:2048 -nodes -keyout server.key -x509 -days 365 -out server.crt
HTTPS=true SSL_CRT_FILE=server.crt SSL_KEY_FILE=server.key
