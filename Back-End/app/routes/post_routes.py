# backend/app/routes/post_routes.py

from flask import Blueprint, jsonify, request
from app.controllers.post_controller import create_post, get_all_posts

post_routes = Blueprint('post_routes', __name__)

@post_routes.route('/posts', methods=['POST'])
def create_post_route():
    data = request.get_json()
    title = data['title']
    content = data['content']
    create_post(title, content)
    return jsonify({'message': 'Post created successfully'}), 201

@post_routes.route('/posts', methods=['GET'])
def get_all_posts_route():
    posts = get_all_posts()
    return jsonify({'posts': [{'title': post.title, 'content': post.content} for post in posts]})
