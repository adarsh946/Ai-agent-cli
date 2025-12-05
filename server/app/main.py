from fastapi import Fastapi

app = Fastapi()


@app.post
def run():
