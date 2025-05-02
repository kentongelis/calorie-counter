cd "$(dirname "$0")"

source venv/bin/activate

pip install -r requirements.txt

export FLASK_APP=main.py
export FLASK_ENV=development
flask run --host=127.0.0.1 --port=4000