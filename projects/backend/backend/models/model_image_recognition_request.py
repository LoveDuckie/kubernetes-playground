from typing import Any
from pydantic import BaseModel

class ImageRecognitionRequest(BaseModel):
    id: str
    data: str
    def __init__(__pydantic_self__, **data: Any) -> None:
        super().__init__(**data)
    
    