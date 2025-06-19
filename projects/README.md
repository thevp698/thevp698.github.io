# Project Detail Pages

This directory contains the detailed project pages for your portfolio website. Each project on your main portfolio page links to its own dedicated detail page where you can showcase more information about that specific project.

## How to Create a New Project Detail Page

1. Copy the `template.html` file and rename it to match your project (e.g., `my-new-project.html`)
2. Open the new file and update the following sections:
   - Title and meta description (in the `<head>` section)
   - Project name (the `<h1>` tag)
   - Project tags
   - Repository/demo links
   - Project feature image (replace placeholder SVG with your own image)
   - All content sections (Overview, Features, Technologies, etc.)
   - Screenshots (add your own project screenshots)
   - Navigation links at the bottom

3. If you add actual images:
   - Create an `images` folder inside this `projects` directory
   - Add your project screenshots to this folder
   - Reference them in your HTML like `<img src="images/screenshot1.jpg" alt="Project Screenshot">`

4. Update the main page (`index.html` in the root directory):
   - Find your project card
   - Update the "View Details" link to point to your new detail page

## Example Structure

```
projects/
├── README.md (this file)
├── template.html (template for new project pages)
├── project1.html (E-commerce Platform detail page)
├── project2.html (Task Management App detail page)
├── project-style.css (styles for all project pages)
└── images/ (optional)
    ├── ecommerce-screenshot.jpg
    ├── task-app-screenshot.jpg
    └── ...
```

## Tips for Writing Good Project Detail Pages

1. **Be specific**: Describe exactly what you did and what technologies you used
2. **Show your process**: Explain the challenges you faced and how you solved them
3. **Include code snippets**: Highlight interesting implementations
4. **Use visuals**: Screenshots, diagrams, or even GIFs/videos make your projects more engaging
5. **Link to live demos**: If possible, include links to live versions of your projects

Remember, these project detail pages allow you to go into much more depth than the brief overview on the main portfolio page. Use this space to really showcase your skills and thought process!