# Portfolio Data Structure

All website content is now externalized to data files for easy maintenance. Simply edit the files in `src/data/` to update your portfolio.

## 📁 Data Files

### `src/data/projects.ts`
Contains all project information with images.

```typescript
export const projects: Project[] = [
  {
    id: 1,
    title: "Project Name",
    description: "Project description",
    techStack: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/username/repo",
    image: importedImage
  }
];
```

**To add a new project:**
1. Add project image to `src/assets/`
2. Import it at the top of `projects.ts`
3. Add new project object to the array

---

### `src/data/achievements.ts`
Contains certifications and achievements.

```typescript
export const achievements: Achievement[] = [
  {
    id: 1,
    title: "Certification Name",
    image: "/certificates/cert.png",
    date: "Month Year",
    description: "What you achieved",
    issuer: "Issuing Organization",
    credentialId: "ABC123" // optional
  }
];
```

**To add a new achievement:**
1. Place certificate image in `public/certificates/`
2. Add new achievement object to the array

---

### `src/data/about.ts`
Contains personal, academic, and technical information.

**Exports:**
- `technologies` - Skills and tech stack
- `activities` - Co-curricular activities
- `semesterData` - Semester-wise SGPA
- `personalInfo` - Name, PRN, email, languages, clubs
- `academicInfo` - 10th, 12th, and current education details

**To update:**
- Edit the exported objects directly
- Add/remove items from arrays
- Update personal information

---

### `src/data/contact.ts`
Contains social links and contact information.

**Exports:**
- `socialLinks` - GitHub, LinkedIn, Email links
- `contactInfo` - Email and location

**To update:**
- Edit URLs in `socialLinks` array
- Update email and location in `contactInfo`

---

## 🎯 Benefits

✅ **No Inline Data** - All content is in dedicated data files  
✅ **Easy Updates** - Edit one file to update the website  
✅ **Type Safety** - TypeScript interfaces ensure data consistency  
✅ **Scalable** - Add unlimited projects, achievements, etc.  
✅ **Maintainable** - Clear structure, easy to find and update content  

## 📝 Quick Update Guide

### Update Personal Info
Edit `src/data/about.ts` → `personalInfo` object

### Add New Project
1. Add image to `src/assets/`
2. Edit `src/data/projects.ts`
3. Import image and add to array
4. **Increment the ID** for each new project

**Example:**
```typescript
import newProjectImg from "@/assets/new-project.png";

{
  id: 7, // Next available ID
  title: "New Project",
  description: "Keep descriptions concise (2-3 sentences max)",
  techStack: ["Tech1", "Tech2"], // 3-5 items recommended
  githubLink: "https://github.com/username/repo",
  image: newProjectImg
}
```

### Add New Achievement
1. Add certificate to `public/certificates/`
2. Edit `src/data/achievements.ts`
3. Add to array
4. **Increment the ID** for each new achievement

**Example:**
```typescript
{
  id: 2, // Next available ID
  title: "Certification Name",
  image: "/certificates/cert-name.png",
  date: "Month Year",
  description: "Brief description (1-2 sentences)",
  issuer: "Organization Name",
  credentialId: "ABC123" // Optional
}
```

### Update Social Links
Edit `src/data/contact.ts` → `socialLinks` array

### Update Skills
Edit `src/data/about.ts` → `technologies` array

**Note:** Add skill logo to `src/assets/` first, then import it

---

## 🗑️ Removed Files

The following files have been removed as they're no longer needed:
- `src/data/projects.json` (replaced by `projects.ts`)
- Inline data definitions in components

All data is now centralized in TypeScript files with proper type definitions!

---

## 📱 Responsive Design Guarantees

The UI is built to handle dynamic content without breaking:

### ✅ **Projects Section**
- **Grid Layout**: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- **Card Height**: `h-full` ensures equal height cards
- **Image**: Fixed height (h-48) with object-cover
- **Description**: `line-clamp-3` prevents overflow
- **Tech Stack**: Wraps with `flex-wrap gap-2`
- **Supports**: Unlimited projects

### ✅ **Achievements Section**
- **Grid Layout**: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- **Card Height**: `h-full` ensures equal height
- **Image**: Fixed height (h-64) with object-contain
- **Error Handling**: Fallback SVG if image fails to load
- **Optional Fields**: Safely handles missing issuer/credentialId
- **Supports**: Unlimited achievements

### ✅ **Technologies Section**
- **Grid Layout**: `grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5`
- **Fixed Size**: Icons are 8x8 (h-8 w-8)
- **Lazy Loading**: Images load as needed
- **Supports**: Unlimited skills

### ✅ **Activities Section**
- **List Layout**: Vertical stack with spacing
- **Bullet Points**: Custom styled bullets
- **Supports**: Unlimited activities

### ✅ **Social Links**
- **Grid Layout**: Responsive grid
- **Icon Support**: Dynamic icon rendering
- **Supports**: Unlimited social links

---

## ⚠️ Best Practices

### **Keep Content Concise**
- **Project Descriptions**: 2-3 sentences (line-clamp-3 will truncate)
- **Achievement Descriptions**: 1-2 sentences
- **Tech Stack**: 3-5 items per project (prevents badge overflow)
- **Activity Items**: One sentence each

### **Image Guidelines**
- **Project Images**: 800x600px minimum, landscape orientation
- **Certificates**: 1200x900px minimum for clarity
- **Tech Logos**: SVG preferred, or PNG with transparent background
- **Compress images** before adding to reduce load time

### **Naming Conventions**
- **Files**: Use kebab-case (e.g., `my-project.png`)
- **IDs**: Sequential numbers (1, 2, 3...)
- **No special characters** in filenames

### **Testing Checklist**
After adding new content, test on:
- ✅ Mobile (320px width)
- ✅ Tablet (768px width)
- ✅ Desktop (1920px width)
- ✅ Check image loading
- ✅ Verify text doesn't overflow

---

## 🎨 UI Safeguards

The following features prevent UI breaking:

1. **Responsive Grids**: Auto-adjust columns based on screen size
2. **Equal Height Cards**: `h-full` keeps cards aligned
3. **Text Truncation**: `line-clamp-3` prevents overflow
4. **Flex Wrap**: Badges and tags wrap to new lines
5. **Image Fallbacks**: Error handling for missing images
6. **Optional Fields**: Conditional rendering (won't break if missing)
7. **Lazy Loading**: Images load on demand
8. **Smooth Animations**: Staggered entrance prevents jank

**Result:** You can add unlimited items without breaking the layout! 🎉
