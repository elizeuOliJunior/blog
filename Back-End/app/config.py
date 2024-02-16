
class Config:
    DEBUG = True  # Defina como False em produção
    SQLALCHEMY_DATABASE_URI = 'sqlite:///site.db'  # Use o banco de dados que preferir
    SECRET_KEY = 'sua_chave_secreta'
