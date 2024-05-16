import React from 'react';
import { NormalSection, Page, Seo } from 'dev-nfist-hub';

export default function MEFTSSPage() {
    return (
        <>
            <Seo title="MEFT Student Seminars" useTitleTemplate={true} noIndex={true} />
            <Page>
                <NormalSection sectionId="meft-student-seminars" heading="MEFT Students Seminars" />
            </Page>
        </>
    );
}
