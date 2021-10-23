import mongoose from 'mongoose';

const schoolSchema = mongoose.Schema({
  name: String,
	about: String,
	location: String,
	admission: String,
	image: String,
});

const PostSchool = mongoose.model('School', schoolSchema);

export default PostSchool;