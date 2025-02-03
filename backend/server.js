const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const cloudinary = require('cloudinary').v2;
const dotenv = require('dotenv');
const multer = require('multer');
const OpenAIApi  = require('openai');
const Configuration = require('openai');
const { marked } = require("marked");
const cheerio = require("cheerio");
const { error } = require('console');
const axiox = require('axios');
const { createClient } = require('pexels');
const cron = require('node-cron');
const nodemailer = require('nodemailer');
const { MailtrapTransport } = require("mailtrap");
const bcrypt =  require('bcrypt');
const { subscribe } = require('diagnostics_channel');
const cookieParser = require('cookie-parser');
const session =  require('express-session');
const { Subscription } = require('rxjs');

dotenv.config();


const app = express();
app.use(cors());
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

app.use(cookieParser());
app.use(session({
  secret:"santosh",
  saveUninitialized: true,
  resave:true
}))

// Function to send an email
async function sendEmail(title,imageUrl,content,id,users)
 {
    
  const emailTemplate = `<!DOCTYPE html>
<html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Email Template</title>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
      <style>

          body {
              font-family: 'Poppins', sans-serif;
              background-color: #f7f9fc;
              margin: 0;
              padding: 0;
          }
          .email-container {
              max-width: 600px;
              margin: 20px auto;
              background: #ffffff;
              border: 1px solid #e0e4e7;
              border-radius: 10px;
              overflow: hidden;
              box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
          }
          .email-header {
              background: linear-gradient(135deg, #6a82fb, #fc5c7d);
              color: white;
              text-align: center;
              padding: 20px;
              font-size: 2rem;
              font-weight: 600;
          }
          .email-footer {
              background: #f1f1f1;
              text-align: center;
              padding: 20px;
              font-size: 14px;
              color: #6c757d;
          }
              *{
          text-align:left;
                        font-family: 'Poppins', sans-serif;

          }
          .blog-card {
              padding: 25px;
              text-align: center;
          }
          .card-title {
              font-size: 1.75rem;
              font-weight: 600;
              margin-bottom: 20px;
          }
          img {
              max-width: 100%;
              height: auto;
              display: block;
              margin: 0 auto 20px;
              border-radius: 10px;
          }
          a {
              padding: 5px;
              color: blue;
              text-decoration: none;
              border-radius: 5px;
              font-weight: 500;
              display: inline-block;
          }
          a:hover {
              background-color: #5a72d4;
          }

          /* Styling for headers */
          h1, h2, h3, h4, h5, h6 {
              color: #333;
              font-weight: 400;
              margin-bottom: 15px;
          }
          h1 {
              font-size: 2rem;
              font-size:bolder;
              color:white;
          }
          h2 {
              font-size: 1.75rem;
              font-weight:bold;
          }
          h3 {
              font-size: 1.25rem;
          }
          
          /* Styling for unordered lists and list items */
          ul {
              text-align: left;
              margin: 20px 0;
              padding-left: 20px;
          }
          li {
              font-size: 16px;
              line-height: 1.6;
              color: #555;
              margin-bottom: 10px;
              text-align:left;
          }
      </style>
  </head>
  <body>
      <div class="email-container">
          <!-- Header -->
          <div class="email-header">
              <h1>Hello, Nrima!</h1>
              <h2>Latest Resource to Help You in Germany</h2>
          </div>

          <!-- Blog Content Card -->
          <div class="blog-card">
              <div class="card">
                  <div class="card-body">
                      <h2 class="card-title">Latest Blog Post</h2>
                      <div id="htmlContent">
                          <!-- Blog content goes here -->
                          <p>Welcome to our latest blog post. We share exciting updates, insights, and stories here to help you navigate your journey!</p>
                          <img src="https://res.cloudinary.com/dqcyqnwxj/image/upload/v1737494245/freepik__expand__98493_pod4l8.png" alt="Blog Image">
                          <h2>${title}</h2>
                          <p>${content}</p>
                          <a href="http://localhost:4200/fullBlogPost?id=${id}">Go to Full Blog Post</a>
                      </div>
                  </div>
              </div>
          </div>

          <!-- Footer -->
          <div class="email-footer">
              <p>You're receiving this email because you subscribed to our newsletter.</p>
              <p>&copy; 2025 Tech Blog Company. All rights reserved.</p>
          </div>
      </div>
  </body>
</html>



  `
    


  const allSubscribers = await Subscriber.find();
      allSubscribers.forEach(async subscriber => {
        try {
          // Create a transporter
          const transporter = nodemailer.createTransport({
            service: 'gmail', // Use Gmail or your preferred email service
            auth: {
              user: process.env.GOOGLE_ACCOUNT_EMAIL, // Your email
              pass: process.env.GOOGLE_ACCOUNT_PASSWORD, // Your email password or app-specific password
            },
          });

          // Email options
          const mailOptions = {
            from: 'santosgayak1@gmail.com', // Sender's email
            to:subscriber.email, // Recipient's email
            subject: 'Daily Job Search Help Resource', // Email subject
            html: emailTemplate, // HTML body
          };

          // Send email
          const info = await transporter.sendMail(mailOptions);
          console.log('Email sent:', info.response);
        } catch (error) {
          console.error('Error sending email:', error);
        }

        
      });
    users.forEach(async user => {
      try {
        // Create a transporter
        const transporter = nodemailer.createTransport({
          service: 'gmail', 
          auth: {
               user: process.env.GOOGLE_ACCOUNT_EMAIL, 
              pass: process.env.GOOGLE_ACCOUNT_PASSWORD, 
          },
        });
    
        // Email options
        const mailOptions = {
          from: 'santosgayak1@gmail.com', // Sender's email
          to:user.email, // Recipient's email
          subject: 'Daily Job Search Help Resource', // Email subject
          html: emailTemplate, // HTML body
        };
    
        // Send email
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info.response);
      } catch (error) {
        console.error('Error sending email:', error);
      }

      
    });
    
    
 
}
// Call the function
//sendEmail();

// Call the function
const client = createClient(process.env.PEXELS_API_SECRET_KEY);

// Function to search for images
async function fetchSingleImage(query) {
  const perPage = 1; // Limit the search to 1 image per request
  console.log("Looking image for the title: ",query);
  try {
    const result = await client.photos.search({ query, per_page: perPage });

    if (result.photos && result.photos.length > 0) {
      // Extract and return the URL of the first image
      const imageUrl = result.photos[0].src.medium;
      console.log(`Found 1 image for '${query}':`, imageUrl);
      return imageUrl;
    } else {
      console.log(`No images found for '${query}'.`);
      return null;
    }
  } catch (error) {
    console.error('Error fetching image from Pexels:', error.message);
    return null;
  }
}


cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Set up multer to store files in memory
const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: { fileSize: 50 * 1024 * 1024 }, // Set file size limit (50MB)
}).single('image'); // Accepts a single file with the field name 'image'

const mongoURI = `mongodb+srv://${process.env.MONGO_USERNAME}:${encodeURIComponent(process.env.MONGO_PASSWORD)}@cluster0.zk3yy.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`;

//connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Cannot connect to the database!', err);
  });


//define the schema for user
const UserSchema =  new  mongoose.Schema({
  firstName:{ type: String, required:true},
  lastName:{ type: String, required:true},
  phoneNumber:{ type: String, required:true},
  dateOfBirth:{ type: Date, required:true},
  email:{ type: String, unique:true, required:true},
  password:{ type: String, required:true},
  subscribe:{ type: Boolean, default:false},
  terms:{ type: Boolean, required:true}

});
const User = mongoose.model('User',UserSchema);



const SubscribersSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Regex to validate email format
  },
  subscriptionDate: {
    type: Date,
    default: Date.now, // Automatically records the date of subscription
  }
});
const Subscriber = mongoose.model('Subscriber',SubscribersSchema);

// Define the schema for a blog post
const BlogPostSchema = new mongoose.Schema({
  category:{ type:String,required:true},
  authorName: {type: String, required: true},
  blogTitle: { type: String, required:true},
  imageUrl:{ type:String, required:true},
  readTime: {type: String, required: true},
  content: {
    type: Object,
    required: true,
  },
  comments: [  // Array of comment objects
    {
      _id: { type: mongoose.Schema.Types.ObjectId, default: () => new mongoose.Types.ObjectId() }, 
      authorName: { type: String, required: true, default:"Admin" },
      content: { type: String, required: true,default:"Please use kind and constructive words" },
      upvotes: { type: Number, default: 0 },  
      date: { type: Date, default: Date.now }  
    }
  ],
  likes:{type:Number, default: 0},
  date: {
    type: Date,
    default: Date.now,
  },
});
BlogPostSchema.index({ blogTitle: 'text' });
const BlogPost = mongoose.model('BlogPost', BlogPostSchema);

// Initialize OpenAI API
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY, // Replace with your OpenAI API key
  
});

// Schedule the task to run every 7 hours
cron.schedule('*/1 * * * *', async () => {
  try {
    console.log("GENERATING BLOG NOW>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    
    //generateContent();
  } catch (error) {
    console.error('Error creating blog post:', error);
  }
});


const openai = new OpenAIApi(configuration);
const contentInstructions = [
    "How to Build a Network for Business Jobs in Germany. Write a blog on this, explaining the importance of networking in Germany and how to leverage platforms like LinkedIn, events, and industry groups. Include subheadings, bullets, and helpful links. For the last paragraph, only provide a number for read time in minutes, do not include Read time: for the blog you have written.",
    "How to Format Your Resume for Business Jobs in Germany. Write a blog on this, explaining the unique formatting standards for resumes in Germany, common mistakes to avoid, and tips for a successful application. Include subheadings, bullets, and links to resume-building tools. For the last paragraph, only provide a number for read time in minutes, do not include Read time: for the blog you have written.",
    "How to Write a Strong Cover Letter for Business Jobs in Germany. Write a blog offering guidance on how to write a compelling cover letter, highlighting key elements to include and common pitfalls to avoid in Germany. For the last paragraph, only provide a number for read time in minutes, do not include Read time: for the blog you have written.",
    "How to Use LinkedIn to Find Business and Finance Jobs in Germany. Write a blog on this, providing strategies for optimizing your LinkedIn profile, connecting with recruiters, and finding job opportunities in Germany. Include subheadings, bullets, and helpful links. For the last paragraph, only provide a number for read time in minutes, do not include Read time: for the blog you have written.",
    "Building a Strong German Resume (CV) for Business Jobs. Write a blog on this, explaining the format and key elements of a successful German resume for business and finance roles, including common mistakes to avoid. Include subheadings, bullets, and links to resume-building tools. For the last paragraph, only provide a number for read time in minutes, do not include Read time: for the blog you have written.",
    "How to Prepare for Job Interviews in Germany’s Business Sector. Write a blog on this, giving insights into German interview culture, common questions, and best practices to succeed in interviews. Include subheadings, bullets, and helpful links. For the last paragraph, only provide a number for read time in minutes, do not include Read time: for the blog you have written.",
    "Navigating the German Job Market as an International MBA Graduate. Write a blog on this, offering advice on how international candidates can adapt to Germany’s job market, cultural nuances, and hiring practices. Include subheadings, bullets, and links to useful resources. For the last paragraph, only provide a number for read time in minutes, do not include Read time: for the blog you have written.",
    "Exploring Business and Finance Opportunities in Germany’s FinTech Industry. Write a blog on this, explaining the growth of the FinTech sector in Germany and highlighting key companies and roles for MBA graduates. Include subheadings, bullets, and links to relevant industry reports. For the last paragraph, only provide a number for read time in minutes, do not include Read time: for the blog you have written.",
    "Internships and Trainee Programs in Germany for MBA Graduates. Write a blog on this, discussing how internships and trainee programs are key entry points into Germany’s business and finance industries. Include subheadings, bullets, and links to major internship portals. For the last paragraph, only provide a number for read time in minutes, do not include Read time: for the blog you have written.",
    "How to Set a Routine for Job Applications in Germany. Write a blog on this, offering strategies for creating an efficient job application routine, including time management tips and how to stay organized during the process. For the last paragraph, only provide a number for read time in minutes, do not include Read time: for the blog you have written.",
    "How Many Jobs Should You Apply for Daily? A Guide for MBA Graduates in Germany. Write a blog offering advice on how many jobs to apply for on a daily basis and how to track your applications effectively. For the last paragraph, only provide a number for read time in minutes, do not include Read time: for the blog you have written.",
    "How to Handle Rejection and Build Resilience in Your German Job Search. Write a blog on how to bounce back after rejection, stay motivated, and build resilience during the job application process in Germany. For the last paragraph, only provide a number for read time in minutes, do not include Read time: for the blog you have written.",
    "Coping with Job Search Fatigue: How to Keep Going When You Feel Burnt Out in Germany. Write a blog focusing on how to recognize burnout during a job search, and strategies for recharging, maintaining a work-life balance, and staying healthy during the process in Germany. For the last paragraph, only provide a number for read time in minutes, do not include Read time: for the blog you have written.",
    "How to Stay Motivated During Your MBA Job Search in Germany. Write a blog on how to stay focused and motivated throughout the job search process, offering tips for managing expectations and overcoming self-doubt. For the last paragraph, only provide a number for read time in minutes, do not include Read time: for the blog you have written.",
    "Top Cities in Germany for Business and Finance Jobs. Write a blog on this, highlighting the best locations for business professionals to seek job opportunities in Germany, including cities with strong job markets. Include subheadings, bullets, and useful links. For the last paragraph, only provide a number for read time in minutes, do not include Read time: for the blog you have written.",
    "How to Leverage Job Fairs and Career Events in Germany to Land a Business Role. Write a blog offering tips on how to network and make the most of job fairs and career events in Germany. For the last paragraph, only provide a number for read time in minutes, do not include Read time: for the blog you have written.",
    "Understanding Salary Expectations for Business Roles in Germany. Write a blog on this, providing insights into average salaries for business and finance professionals in Germany, including factors that influence pay levels. Include subheadings, bullets, and helpful links. For the last paragraph, only provide a number for read time in minutes, do not include Read time: for the blog you have written.",
    "How to Stand Out in Germany's Highly Competitive Business Job Market. Write a blog on this, offering strategies to differentiate yourself from other candidates, including personal branding, certifications, and networking. For the last paragraph, only provide a number for read time in minutes, do not include Read time: for the blog you have written.",
    "How to Build Mental Resilience for Job Seekers in Germany. Write a blog offering tips and techniques for building mental resilience in the face of job search difficulties, including advice on stress management and maintaining a positive outlook. For the last paragraph, only provide a number for read time in minutes, do not include Read time: for the blog you have written.",
    "Job Search Resources for MBA Graduates in Germany. Write a blog on this, compiling a list of websites, career fairs, and recruitment agencies that specialize in business and finance roles in Germany. Include subheadings, bullets, and links to these resources. For the last paragraph, only provide a number for read time in minutes, do not include Read time: for the blog you have written.",
    "How to Overcome Job Search Stress and Stay Positive When Jobs Are Hard to Find in Germany. Write a blog discussing how to handle stress and feelings of discouragement when job opportunities are scarce, and how to stay hopeful and proactive in the search. For the last paragraph, only provide a number for read time in minutes, do not include Read time: for the blog you have written.",
    "How to Tailor Your Resume for Business Roles in Germany. Write a blog on how to customize your resume for different business and finance roles, providing practical tips on how to align your skills and experience with job descriptions. For the last paragraph, only provide a number for read time in minutes, do not include Read time: for the blog you have written.",
    "How to Write a Winning Cover Letter for Business Jobs in Germany. Write a blog on the key elements of a compelling cover letter, tailored to the German job market, including tips on structure and language. For the last paragraph, only provide a number for read time in minutes, do not include Read time: for the blog you have written.",
    "How to Use Job Search Websites Effectively in Germany. Write a blog offering tips on how to use popular German job search websites to find business and finance jobs, with recommendations on job search strategies and tools. For the last paragraph, only provide a number for read time in minutes, do not include Read time: for the blog you have written.",
    "How to Stay Organized During Your MBA Job Search in Germany. Write a blog offering advice on how to stay organized throughout the job application process, including tools and strategies for managing your time, documents, and deadlines. For the last paragraph, only provide a number for read time in minutes, do not include Read time: for the blog you have written.",
    "Overcoming Self-Doubt During Your Job Search in Germany: Building Confidence. Write a blog offering guidance on overcoming self-doubt and fear of failure during the job search, with a focus on building confidence in the process. For the last paragraph, only provide a number for read time in minutes, do not include Read time: for the blog you have written.",
    "How to Improve Your German Language Skills for Job Opportunities. Write a blog on the importance of learning German for business roles in Germany and recommend free resources, apps, and tools to help improve your skills. For the last paragraph, only provide a number for read time in minutes, do not include Read time: for the blog you have written."
];

let currentIndex = 0;

function getNextTitle(titles) {
    if (titles.length === 0) {
        return null; 
    }
    const nextTitle = titles[currentIndex];
    currentIndex = (currentIndex + 1) % titles.length;
    return nextTitle;
}
// Function to generate completion
async function generateContent() {
  try {
    const blogTitleChoice = getNextTitle(contentInstructions);
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are a blog writer and technology expert." },
        { role: "user", content: `${blogTitleChoice}` },
      ],
    });

    const rawContent = completion.choices[0].message.content;
    // Convert the raw content into HTML
    const htmlContent = marked(rawContent);

    const $ = cheerio.load(htmlContent, null, false);

    // Dynamically select the first tag in the HTML
    const firstTag = $.root().children().first();
    const blogTitle = firstTag.text();

    // Get the updated HTML content
    const updatedHtmlContent = $.html();

    console.log("Blog title:", blogTitle);

    // Fetch an image URL dynamically based on the blog title
    const blogImageUrl = await fetchSingleImage(blogTitleChoice);

    // Extract the last paragraph text for the read time
    const readTime = $('p:last').text(); // Assume the last <p> tag contains the read time
    $('p:last').remove();

 // Remove the first tag from the content
 firstTag.remove();
    // Finalize the HTML content
    const finalHtmlContent = $.html();

    const newPost = new BlogPost({
        category: "Job Opportunity Germany",
        authorName: "Santosh Gayak",
        blogTitle: blogTitle,
        imageUrl:blogImageUrl,
        readTime: readTime,
        content: finalHtmlContent,
        comments: [{ 
          authorName: "Admin", 
          content: "Please use kind and constructive words", 
          upvotes: 0 ,
          date:new Date()
        }], 
        likes: 0,
        date: new Date(),
      });
    // Save the blog post to the database
    await newPost.save();
    const subscribers = await getSubscribers();
    sendEmail(newPost.blogTitle,newPost.imageUrl,finalHtmlContent,newPost.id,subscribers);

    console.log("ID: ::: ",newPost.id);
    console.log("Automatic Post saved successfully!", newPost);
  } catch (error) {
    console.error("Error processing request:", error);
  }
}

// POST route to handle image upload
app.post('/upload', upload, (req, res) => {
  console.log("i am here upload.");
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded.' });
  }

  // Upload the image to Cloudinary
  cloudinary.uploader.upload_stream({ resource_type: 'auto' }, (error, result) => {
    if (error) {
      return res.status(500).json({ error: 'Error uploading image to Cloudinary.' });
    }

    // Respond with the image URL from Cloudinary
    console.log("url:",result.secure_url);
    res.status(200).json({ image: result.secure_url });
  }).end(req.file.buffer); // Send the image buffer to Cloudinary
});

// GET route to test the server
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the server!' });
});

// Function to convert Editor.js blocks to HTML
function convertEditorJsToHtml(blocks) {
  return blocks
    .map((block) => {
      switch (block.type) {
        case 'paragraph':
          return `<p>${block.data.text}</p>`;
        case 'header':
          return `<h${block.data.level}>${block.data.text}</h${block.data.level}>`;
        case 'list':
          const listType = block.data.style === 'unordered' ? 'ul' : 'ol';
          const items = block.data.items
            .map((item) => {
              if (typeof item === 'object' && item !== null) {
                return `<li>${item.content || ''}</li>`;
              }
              return `<li>${item}</li>`;
            })
            .join('');
          return `<${listType}>${items}</${listType}>`;

          case 'image':
            return `<img src="${block.data.file.url}" alt="${block.data.caption}" />`;
        default:
          console.warn(`Unsupported block type: ${block.type}`);
          return '';
      }
    })
    .join('');
}


app.get('/posts', (req, res) => { 
  BlogPost.find()
    .then((posts) => {
      const postsData = posts.map(post => {
        let htmlContent = '';
        if (typeof post.content === 'string') {
          htmlContent = post.content;
        }
        // Check if content is an object with blocks (Editor.js format)
        else if (post.content && Array.isArray(post.content.blocks)) {
          htmlContent = convertEditorJsToHtml(post.content.blocks);
        } else {
          console.warn('Invalid content format in post:', post);
          return null;
        }
        if (htmlContent) {
          return {
            htmlContent,
            id: post.id,
            category: post.category,
            authorName: post.authorName,
            blogTitle: post.blogTitle,
            imageUrl: post.imageUrl,
            readTime: post.readTime,
            likes:post.likes,
            date: post.date,
          };
        } else {
          console.warn('No HTML content generated for post:', post);
          return null; 
        }
      }).filter(post => post !== null); 

      console.log('Final posts:', postsData); 

      // Send the filtered list of posts as a JSON response
      res.json(postsData);
    })
    .catch((err) => {
      console.error('Error fetching posts:', err);
      res.status(500).json({ error: 'Error fetching posts.' });
    });
});

// Assuming you are using Express and MongoDB
app.post('/comments/add', async (req, res) => {
  try {
    const { postId, comment } = req.body; // Expecting postId and comment
    const post = await BlogPost.findById(postId); // Find the blog post by ID

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    // Add the comment to the post's comments array
    post.comments.push(comment);

    // Save the post with the new comment
    await post.save();

    // Send the updated post with comments back to the client
    res.status(200).json({ message: 'Comment added successfully', post });
  } catch (error) {
    console.error('Error saving comment:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

app.get('/posts/:id', async (req, res) => {
  try {
    const postId = req.params.id; // Get post ID from URL
    const post = await BlogPost.findById(postId); // Fetch post from MongoDB by ID
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    let htmlContent = '';
    if (typeof post.content === 'string') {
      htmlContent = post.content;
    } else {
      htmlContent = convertEditorJsToHtml(post.content.blocks);
    }

    if (htmlContent) {
      return res.json({
        htmlContent, 
        id: post._id.toString(), // Use _id and convert it to string if necessary
        authorName: post.authorName,
        blogTitle: post.blogTitle,
        imageUrl: post.imageUrl,
        readTime: post.readTime,
        comments: post.comments,
        likes:post.likes,
        date: post.date,
      });
    } else {
      console.warn('No HTML content generated for post:', post);
      return res.status(500).json({ message: 'Error generating HTML content' });
    }
    
  } catch (error) {
    console.error('Error fetching post:', error);
    res.status(500).json({ message: 'Server error' });
  }
});
app.post('/addLikes/:postId/:commentId', async (req, res) => {
  try {
    const { postId, commentId } = req.params;
    const post = await BlogPost.findById(postId);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    const comment = post.comments.id(commentId); 
    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }

    // Increment the upvotes
    comment.upvotes += 1;

    // Save the updated post
    await post.save();

    console.log("Updated comment upvotes:", comment.upvotes);
    res.status(200).json({ message: 'Like added successfully', updatedComment: comment });
  } catch (error) {
    console.error("Error updating likes:", error);
    res.status(500).json({ message: 'Internal server error', error });
  }
});


app.post('/addLikes/:postId', async(req,res)=>{
  try {
    const { postId } = req.params;
    console.log("Post ID:", postId);

    // Find the post by ID
    const post = await BlogPost.findById(postId);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    // Increment the upvotes
    post.likes += 1;

    // Save the updated post
    await post.save();

    console.log("Updated post likes:", post.likes);
    res.status(200).json({ message: 'Like added successfully to the post', post });
  } catch (error) {
    console.error("Error updating post likes:", error);
    res.status(500).json({ message: 'Internal server error', error });
  }

})

async function getHashPassword(password){
    const saltRound = 10;
    try{
      const salt  = await bcrypt.genSalt(saltRound);
      const hashedPassword = await bcrypt.hash(password,salt);
      return hashedPassword;
    }catch(error){
      console.error('Error hashing password:',error);
      throw error;
    }
}

//Post of save user registration
app.post('/save-user',async (req,res)=>{
  const { firstName, lastName, phoneNumber, dateOfBirth, email, unHashedPassword,subscribe,terms} = req.body;
  if (!firstName || !lastName || !phoneNumber || !dateOfBirth || !email || !unHashedPassword || !terms) {
    return res.status(400).json({ message: 'All fields are required' });
  }
  const password = await getHashPassword(unHashedPassword);
  const newUser = new User({
    firstName,
    lastName,
    phoneNumber,
    dateOfBirth,
    email,
    password,
    subscribe,
    terms
  });

  newUser.save()

  .then((user)=>{
      res.status(201).json({message: "User saved successfully",user: user});
  })
  .catch((error) => {
    console.error('Error saving the user:',error);
    res.status(500).json({ message: 'Error saving user', error: error.message });
  })

});
app.post('/signIn-user', async (req, res) => {
    console.log(" iam in");
    const { email, password } = req.body;
    console.log("From user :",email,password);

  try{
        const user = await User.findOne({ email: email });
        if(!user){
          console.log("user not found!");
          return res.status(404).json({message:"User not found!"});
        }
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
          console.log("Invalid password. Please try again");
          res.status(401).json({message:"Invalid password. Please try again!"})
        }
        req.session.user = user;
        console.log("User: ",req.session.user);
        console.log("Sign In successful!");
        return res.status(200).json({message:"Sign in Successful!",user});

  }catch(error){
    console.error("Error during Sign In!");
    return res.status(500).json({message:"Internal Server Error!"});

  }

});


app.get('/session',(req,res)=>{
    if(req.session.user){
      res.json({user:req.session.user});
    }else{
      res.status().json({message:"No active sessions"});
    }
});

async function getSubscribers() {
  try {
    const users = await User.find({ subscribe: true });
    return users;
  } catch (error) {
    console.log("Error finding Users!", error);  
    return null;
  }
}

// POST route to save a post
app.post('/save-post', (req, res) => {
  try {
    const { category,authorName,blogTitle,image, readTime, content } = req.body;
    const newPost = new BlogPost({
      category: category,
      authorName: authorName,
      blogTitle: blogTitle,
      imageUrl:image,
      readTime: readTime,
      content: content,
      comments: [{ 
        authorName: "Admin", 
        content: "Please use kind and constructive words", 
        upvotes: 0 ,
        date:new Date()
      }], 
      likes: 0,
      date: new Date(),
    });
    newPost.save()
      .then(async (savedPost) => {
        console.log("Saved Post: ",savedPost);
        const subscribers = await getSubscribers();
        console.log("Subscribers: ",subscribers);
        console.log("New Post.conent: ",newPost.content);
        const htmlContent = convertEditorJsToHtml(newPost.content.blocks);
        console.log("Converted content: ",htmlContent);
        sendEmail(newPost.blogTitle,newPost.imageUrl,htmlContent,newPost.id,subscribers);
        res.status(200).json({ message: 'Post saved successfully', post:savedPost

        });
      })
      .catch((error) => {
        console.error('Error saving post to DB:', error);
        res.status(500).json({ error: 'Error saving post to database' });
      });
  } catch (error) {
    console.error('Error processing request:', error);
    res.status(500).json({ error: 'Error processing request' });
  }
});

//delete post
app.delete('/posts/:id', async (req, res) => {
  try {
    console.log(" I am in");
    const { id } = req.params;
    const deletedBlogPost = await BlogPost.findByIdAndDelete(id);
    
    if (!deletedBlogPost) {
      return res.status(404).json({ message: 'Blog post not found' });
    }

    res.json({ message: 'Blog post deleted successfully', deletedBlogPost });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting blog post' });
  }
});


//subscribe blog
app.post('/subscribe', async (req,res)=>{
  const {email}=req.body;
  console.log("Email in backend:",email);
  if(!email){
    return res.status(400).json({ error: 'Email is required' });
  }
  const existingSubscriber =await  Subscriber.findOne({email:email});
  if (existingSubscriber) {
    console.log("already subscribed.")
    return res.status(409).json({ error: 'Email already subscribed.' });
  }
  try{
    const newSubscriber = new Subscriber({email});
    await newSubscriber.save();
    res.status(201).json({ message: 'Successfully subscribed!' });
  }catch(eror){
    if (error.code === 11000) {
      res.status(409).json({ error: 'Email already subscribed.' });
    } else {
      res.status(500).json({ error: 'An error occurred. Please try again.' });
    }
  }


});


app.get('/searchBlogs', async (req, res) => {
  const { keywords } = req.query;
  console.log("Keywords are:", keywords);

  if (!keywords) {
    return res.status(400).send({ error: "Please provide search keywords" });
  }

  try {
    const blogs = await BlogPost.find({ $text: { $search: keywords } })
      .sort({ score: { $meta: "textScore" } })  
      .exec();

    if (blogs.length === 0) {
      return res.status(404).send({ message: "No blogs found matching the keywords" });
    }

    return res.status(200).json({ blogs });
  } catch (error) {
    console.error('Error during search:', error);
    return res.status(500).send({ error: "Internal server error" });
  }
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
