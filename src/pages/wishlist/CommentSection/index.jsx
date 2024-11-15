import { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { Button } from "comp-lib";
import ButtonContainer from "../../../ui/molecules/ButtonContainer";
import { GET_WISHLIST } from "../../../graphql/queries";
import { getDateDistance, sortByDate } from "../../../utils/utils";
import { WISHLIST_ADD_COMMENT, WISHLIST_DELETE_COMMENT, WISHLIST_UPDATE_COMMENT } from "../../../graphql/mutations";
import { CommentActions, CommentList, Container, DeleteContainer, LikesContainer, NewCommentInput } from "./index.styles";

const CommentSection = ({
	canAddComments,
	comments,
	loggedInUserId,
	wishlistId
}) => {
	const [ newComment, setNewComment ] = useState('');

	const [ submitNewComment, { loading, error, data, reset } ] = useMutation(WISHLIST_ADD_COMMENT, {
		refetchQueries: [ {
			query: GET_WISHLIST,
			variables: {
				id: wishlistId
			}
		} ],
		onCompleted: () => {
			setNewComment('');
		}
	});

	const [ updateComment, { loading: updateCommentLoading, error: updateCommentError } ] = useMutation(WISHLIST_UPDATE_COMMENT, {
		refetchQueries: [ {
			query: GET_WISHLIST,
			variables: {
				id: wishlistId
			}
		} ]
	})

	const [ deleteComment, { } ] = useMutation(WISHLIST_DELETE_COMMENT, {
		refetchQueries: [ {
			query: GET_WISHLIST,
			variables: {
				id: wishlistId
			}
		} ]
	})

	const handleOnChangeTextArea = ({ target }) => {
		setNewComment(target.value);
	}

	const handleOnClickLikeButton = (isLiked, commentId) => {
		const action = isLiked ? 'UNLIKE' : 'LIKE';

		updateComment({
			variables: {
				input: {
					action,
					wishlistId,
					commentId
				}
			}
		})
	}

	const handleOnSubmitComment = () => {
		submitNewComment({
			variables: {
				input: {
					wishlistId,
					comment: newComment
				}
			}
		})
	}

	const handleOnClickDeleteComment = (commentId) => {
		deleteComment({
			variables: {
				commentId,
				wishlistId
			}
		})
	}

	return (
		<Container>
			<small className="title">
				Comments
			</small>
			{
				canAddComments && (
					<NewCommentInput>
						<label>Add a new comment</label>
						<textarea
							rows={3}
							value={newComment}
							onChange={handleOnChangeTextArea}
						/>
					</NewCommentInput>
				)
			}
			<CommentActions>
				<ButtonContainer
					isLoading={loading}
					isError={error}
					isSuccess={data?.addComment}
					onResetFeedback={reset}
				>
					<Button
						label='Submit'
						disabled={newComment.trim() === '' || loading}
						onClick={handleOnSubmitComment}
					/>
				</ButtonContainer>
			</CommentActions>

			<CommentList>
				{
					comments
						.sort(sortByDate)
						.map(commentObj => {
							const isCommentLiked = commentObj.likedBy.includes(loggedInUserId);
							return (
								<div
									key={commentObj.id}
									className="commentListItem"
								>
									<p>{commentObj.comment}</p>
									<div className="footer">
										<small>{commentObj.user.name}</small>
										<small>{getDateDistance(commentObj.createdAt)}</small>
										<LikesContainer
											onClick={() => handleOnClickLikeButton(isCommentLiked, commentObj.id)}
											isLiked={isCommentLiked}
										>
											<small>{commentObj.likes}</small>
											<ion-icon name="thumbs-up"></ion-icon>
										</LikesContainer>
										<DeleteContainer
											onClick={() => handleOnClickDeleteComment(commentObj.id)}
										>
											<ion-icon name="trash"></ion-icon>
											<small>Delete</small>
										</DeleteContainer>
									</div>
								</div>
							)
						})
				}
			</CommentList>
		</Container>
	);
}

export default CommentSection;