import { graphql, useStaticQuery } from 'gatsby';

interface SvgImage {
    content: string;
    originalContent: string;
    dataURI: string;
    absolutePath: string;
    relativePath: string;
}

interface Course {
    color: string;
    description: string;
    image: {
        svg: SvgImage;
    };
    name: string;
    link: string;
    long: string;
}

interface Semester {
    name: string;
    courses: Course[];
}

interface Year {
    name: string;
    semesters: Semester[];
}

interface ResumosSection {
    html: string;
    frontmatter: {
        sectionId: string;
        years: Year[];
    };
}

export interface ResumosSectionQueryResult {
    allResumosSection: {
        sections: ResumosSection[];
    };
}

export const useLocalDataSource = (): ResumosSectionQueryResult => {
    return useStaticQuery(graphql`
        query ResumosSectionQuery {
            allResumosSection: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/sections/" } }) {
                sections: nodes {
                    html
                    frontmatter {
                        sectionId
                        years {
                            name
                            semesters {
                                name
                                courses {
                                    color
                                    description
                                    image {
                                        svg {
                                            content
                                            originalContent
                                            dataURI
                                            absolutePath
                                            relativePath
                                        }
                                    }
                                    name
                                    link
                                    long
                                }
                            }
                        }
                    }
                }
            }
        }
    `);
};

export const getSectionBySectionId = (res: ResumosSectionQueryResult, id: string): ResumosSection => {
    const sectionList = res.allResumosSection.sections.filter((section) => section.frontmatter.sectionId === id);
    if (sectionList.length === 0) {
        throw new Error(`Could not find section ${id} by id.`);
    } else if (sectionList.length > 1) {
        throw new Error(`Found section ${id} multiple times. Make sure the id is unique.`);
    } else {
        return sectionList[0];
    }
};
