mkdir -p OKAY

split -l 1 --numeric-suffixes=1 --suffix-length=4 --additional-suffix=.rule pref.rule chunk_

for f in chunk_*.rule; do
    echo "Проверяю $f ..."
    n_rules=$(wc -l < "$f")
    n_out=$(hashcat --stdout -r "$f" /tmp/password.txt | wc -l)

    if [ "$n_out" -eq "$n_rules" ]; then
        echo " -> $f: OKAY ($n_out / $n_rules)"
        mv "$f" OKAY/
    else
        echo " -> $f: NOT OKAY ($n_out / $n_rules)"
    fi
done
