import { graphql, useStaticQuery } from 'gatsby';

interface NormalSection {
    html: string;
    frontmatter: {
        sectionId: string;
    };
}

export interface NormalSectionQueryResult {
    allNormalSection: {
        sections: NormalSection[];
    };
}

export const useLocalDataSource = (): NormalSectionQueryResult => {
    return useStaticQuery(graphql`
        query NormalSectionQuery {
            allNormalSection: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/sections/" } }) {
                sections: nodes {
                    html
                    frontmatter {
                        sectionId
                    }
                }
            }
        }
    `);
};

export const getSectionBySectionId = (res: NormalSectionQueryResult, id: string): NormalSection => {
    const sectionList = res.allNormalSection.sections.filter((section) => section.frontmatter.sectionId === id);
    if (sectionList.length === 0) {
        throw new Error(`Could not find section ${id} by id.`);
    } else if (sectionList.length > 1) {
        throw new Error(`Found section ${id} multiple times. Make sure the id is unique.`);
    } else {
        return sectionList[0];
    }
};
