"""add meta_ in model tabel

Revision ID: 92f07171e6e3
Revises: 6e44776dc6dd
Create Date: 2024-11-13 14:54:56.423708

"""
from alembic import op
import sqlalchemy as sa
import sqlmodel.sql.sqltypes
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision = '92f07171e6e3'
down_revision = '6e44776dc6dd'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('models', sa.Column('metadata', postgresql.JSONB(astext_type=sa.Text()), server_default='{}', nullable=False))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('models', 'metadata')
    # ### end Alembic commands ###
