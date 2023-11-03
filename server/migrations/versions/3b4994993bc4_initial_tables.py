"""initial Tables

Revision ID: 3b4994993bc4
Revises: 
Create Date: 2023-11-03 14:55:33.175161

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '3b4994993bc4'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('medias',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(), nullable=True),
    sa.Column('date', sa.String(), nullable=True),
    sa.Column('explanation', sa.String(), nullable=True),
    sa.Column('copyright', sa.String(), nullable=True),
    sa.Column('media_type', sa.String(), nullable=True),
    sa.Column('url', sa.String(), nullable=True),
    sa.Column('hd_url', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(), nullable=False),
    sa.Column('password_hash', sa.String(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('username')
    )
    op.create_table('user_medias',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('media_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['media_id'], ['medias.id'], name=op.f('fk_user_medias_media_id_medias')),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], name=op.f('fk_user_medias_user_id_users')),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('user_medias')
    op.drop_table('users')
    op.drop_table('medias')
    # ### end Alembic commands ###
