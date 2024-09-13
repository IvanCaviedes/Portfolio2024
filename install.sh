sleep 30 & PID=$!

printf "["
while kill -0 $PID 2> /dev/null; do
    printf "■"
    sleep 1
done
echo "]"