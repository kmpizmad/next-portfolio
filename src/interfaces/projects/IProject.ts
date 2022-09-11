export default interface IProject {
  name: string;
  image: string;
  repository: string;
  type: ProjectType;
}

/**
 * Web/Api: demo link
 * Design: Carousel / Gallery
 */
type ProjectType = 'web' | 'design' | 'api';
