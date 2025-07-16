---
inclusion: always
priority: high
---

# Documentation Standards & Guidelines

## Voice & Tone
- **Clear and Helpful**: Write in plain English, avoiding unnecessary jargon
- **Beginner-Friendly**: Assume readers are learning, provide context and explanations
- **Professional yet Approachable**: Maintain technical accuracy while being welcoming
- **Action-Oriented**: Focus on what users can do, not just what things are

## Content Structure
Follow the **Problem → Solution → Example → Next Steps** pattern:

1. **Problem**: What challenge does this solve?
2. **Solution**: How does our approach address it?
3. **Example**: Working code or concrete demonstration
4. **Next Steps**: Where to go from here

## Technical Documentation Requirements

### API Documentation
- Include complete request/response examples
- Show authentication methods with working tokens (sanitized)
- Provide curl commands for every endpoint
- Document error responses and status codes
- Include rate limiting and pagination details

### Component Documentation
- Document all props with types and default values
- Show events emitted and their payloads
- Explain slots and their expected content
- Provide usage patterns and common scenarios
- Include accessibility considerations

### Tutorial Documentation
- Break complex processes into numbered steps
- Include screenshots for UI-heavy processes
- Provide code snippets that can be copy-pasted
- Test all examples before publishing
- Include troubleshooting sections

## Code Examples Standards
- All code blocks must be syntax-highlighted
- Include language identifiers in markdown code blocks
- Provide complete, runnable examples when possible
- Use realistic but sanitized data (no real API keys, emails, etc.)
- Include comments explaining non-obvious parts

## Quality Gates
Before publishing any documentation:
- [ ] All external links are validated and working
- [ ] Code examples have been tested and work
- [ ] Screenshots include descriptive alt text
- [ ] Content passes accessibility audit (WCAG 2.1 AA)
- [ ] Technical accuracy reviewed by subject matter expert
- [ ] Writing clarity reviewed for target audience

## Visual Standards
- Use consistent heading hierarchy (H1 → H2 → H3)
- Include relevant diagrams for complex concepts
- Screenshots should be high-resolution and up-to-date
- Use consistent formatting for code, filenames, and UI elements
- Maintain consistent spacing and layout

## Maintenance Guidelines
- Review and update documentation quarterly
- Validate all links monthly
- Update screenshots when UI changes
- Archive outdated content rather than deleting
- Track documentation usage and feedback

## Integration Requirements
- All documentation must be searchable
- Include relevant tags and categories
- Cross-reference related content
- Maintain version compatibility information
- Support both light and dark theme viewing

## Accessibility Standards
- Use semantic HTML structure
- Provide alt text for all images
- Ensure sufficient color contrast
- Support keyboard navigation
- Include skip links for long content
- Use descriptive link text (not "click here")

## Performance Considerations
- Optimize images for web delivery
- Use lazy loading for heavy content
- Minimize external dependencies
- Ensure fast search functionality
- Support offline viewing when possible