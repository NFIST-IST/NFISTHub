import React from 'react';
import { Section } from '../../components/Section';
import { PageSection } from '../../types';
import { getSectionBySectionId, useLocalDataSource } from './data';
import * as classes from './style.module.css';
import SectionButton, { SectionButtonLayout } from './SectionButton';

export function EventosSection(props: PageSection): React.ReactElement {
    const response = useLocalDataSource();
    const data = getSectionBySectionId(response, props.sectionId);

    return (
        <Section anchor={props.sectionId} heading={props.heading}>
            <div dangerouslySetInnerHTML={{ __html: data.html }} />
            <div style={{ marginTop: 50 }}>
                {data.frontmatter.years.map(({ name, semesters }) => (
                    <div className={classes.YearSection} key={name}>
                        <h2>{name}</h2>
                        <div>
                            {semesters.map(({ name, courses }) => (
                                <div className={classes.SemesterSection} key={name}>
                                    <h3>{name}</h3>
                                    <SectionButtonLayout>
                                        {courses.map(({ name, description, image, link, color, long }) => (
                                            <SectionButton
                                                key={link}
                                                name={name}
                                                description={description}
                                                link={link}
                                                image={image?.svg.dataURI}
                                                color={color}
                                                long={long}
                                            />
                                        ))}
                                    </SectionButtonLayout>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
