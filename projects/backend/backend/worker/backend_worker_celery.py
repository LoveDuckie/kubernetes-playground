from celery import Celery

class BackendWorkerCelery(Celery):
    def __init__(self, main=None, loader=None, backend=None, amqp=None, events=None, log=None, control=None, set_as_current=True, tasks=None, broker=None, include=None, changes=None, config_source=None, fixups=None, task_cls=None, autofinalize=True, namespace=None, strict_typing=True, **kwargs):
        super().__init__(main, loader, backend, amqp, events, log, control, set_as_current, tasks, broker, include, changes, config_source, fixups, task_cls, autofinalize, namespace, strict_typing, **kwargs)