from fastapi import FastAPI


app = FastAPI()

@app.get('/health')
def app_health():
    return