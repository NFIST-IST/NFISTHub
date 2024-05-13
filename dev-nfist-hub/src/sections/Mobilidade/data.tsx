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

interface MobilidadeSection {
    html: string;
    frontmatter: {
        sectionId: string;
        years: Year[];
    };
}

export interface MobilidadeSectionQueryResult {
    allMobilidadeSection: {
        sections: MobilidadeSection[];
    };
}

export const useLocalDataSource = (): MobilidadeSectionQueryResult => {
    return useStaticQuery(graphql`
        query MobilidadeSectionQuery {
            allMobilidadeSection: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/sections/mobilidade/" } }) {
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

export const getSectionBySectionId = (res: MobilidadeSectionQueryResult, id: string): MobilidadeSection => {
    const sectionList = res.allMobilidadeSection.sections.filter((section) => section.frontmatter.sectionId === id);
    if (sectionList.length === 0) {
        throw new Error(`Could not find section ${id} by id.`);
    } else if (sectionList.length > 1) {
        throw new Error(`Found section ${id} multiple times. Make sure the id is unique.`);
    } else {
        return sectionList[0];
    }
};
