import celery
from backend.worker.backend_worker_celery import BackendWorkerCelery

celery_app = BackendWorkerCelery()

@celery_app.task(bind=True,name='recognise_image')
def task_recognise_image(self):
    pass