# Implementation Plan - Portfolio Simplification

This plan outlines the steps to simplify the portfolio by removing specific text elements and streamlining the contact section.

## User Review Required

> [!WARNING]
> This will remove the detailed experience descriptions and focus exclusively on the technology stacks used. It also removes the "Resume" and "View Experience" call-to-actions from the hero section.

## Proposed Changes

### 1. Hero Section Refinement
- **Modify** `index.html`:
    - Remove "MSc Computer Science @ University of Galway |" from the subtitle.
    - Remove the "Resume" and "View Experience" buttons from the `.hero-actions` div.
    - Keep only the "Get In Touch" button.

### 2. Experience Section Streamlining
- **Modify** `index.html`:
    - Remove all `<ul class="experience-list">` blocks within the experience timeline.
    - Ensure only the `.tech-stack` (skill pills) remains for each experience item.

### 3. "Get In Touch" Section (Icons Only)
- **Modify** `index.html`:
    - Rename the "Contact" section header to "Get In Touch".
    - Update the `.contact-links` to contain only icons.
    - Remove the `<span>` text labels (phone numbers, email address, etc.).
- **Modify** `styles.css`:
    - Update `.contact-item` styling to focus on large, centered icons.
    - Ensure the layout remains balanced with icons only.

## Verification Plan

### Automated Tests
- None.

### Manual Verification
- Verify that the hero subtitle looks clean without the MSc text.
- Check that the experience section now only shows the company, role, date, and tech pills.
- Ensure the "Get In Touch" icons are properly sized and linked.
