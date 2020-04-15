import React from 'react';
import { FiMessageCircle, FiUpload, FiCheckCircle, FiChevronDown } from 'react-icons/fi';
import { AiOutlineRetweet } from 'react-icons/ai';
import { IoIosHeartEmpty } from 'react-icons/io';
import './Post.css';

const Post = ( {authorData, content, image, date} ) => {
    return (
        <div className="post-data">
            <div className="post-info">
                <img src={authorData.photo} alt="user phot"/>
                <p className="name-author">
                    <span className="name">{authorData.name}</span>
                    <span className="check"><FiCheckCircle /></span>
                    <span className="nickname">{authorData.nickname}</span>
                    <span className="point">&middot;</span>
                    <span className="date">{date}</span>
                </p>
                <p className="text-content">{content}</p>
                <span className="check-down"><FiChevronDown /></span>
            </div>
            <div className="post-content">
                <img src={image} alt="content phot"/>
            </div>
            <div className="post-stat">
                <ul className="static-data">
                    <li><span className="mes"><FiMessageCircle /></span>482</li>
                    <li><span className="shar"><AiOutlineRetweet /></span>146</li>
                    <li><span className="heart"><IoIosHeartEmpty /></span>887</li>
                    <li><span className="out"><FiUpload /></span></li>
                </ul>

            </div> 
        </div>
    );
}

export default Post;