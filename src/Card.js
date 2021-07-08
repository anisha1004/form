import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Button } from "@material-ui/core";
import storage from "./firebase";
//import UploadButtons from "./UploadButton";

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 1000,
	},
	media: {
		width: 250,
		height: 250,
	},
	root_b: {
		"& > *": {
			margin: theme.spacing(1),
		},
	},
	input: {
		display: "none",
	},
}));

export default function MediaCard() {
	const classes = useStyles();
	const [image, setImage] = useState("");
	const [url, setUrl] = useState("");
	const upload = () => {
		if (image === null) return;
		storage.ref(`/images/${image.name}`).put(image);
	};
	return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardMedia
					className={classes.media}
					image={url}
					title='Contemplative Reptile'
				/>
				{/* <img src={url} className='image-url' /> */}
				<CardContent></CardContent>
			</CardActionArea>

			<CardActions>
				{/* <UploadButtons /> */}
				{/* <input
					onChange={(e) => {
						setImage(e.target.files[0]);
						setUrl(URL.createObjectURL(e.target.files[0]));
					}}
					className={classes.input}
					id='contained-button-file'
					multiple
					type='file'
				/>
				<Button
					variant='contained'
					color='primary'
					component='span'
					onClick={upload}>
					Upload
				</Button> */}
				<div className={classes.root_b}>
					<input
						accept='image/*'
						onChange={(e) => {
							setImage(e.target.files[0]);
							setUrl(URL.createObjectURL(e.target.files[0]));
						}}
						className={classes.input}
						id='contained-button-file'
						multiple
						type='file'
					/>
					<label htmlFor='contained-button-file'>
						<Button
							variant='contained'
							color='primary'
							onClick={upload}
							component='span'>
							Upload
						</Button>
					</label>
				</div>
				<Button>Remove</Button>
			</CardActions>
		</Card>
	);
}
