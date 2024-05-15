import React from 'react';
import { NormalSection, Page, Seo } from 'dev-nfist-hub';

export default function UTwentePage() {
    return (
        <>
            <Seo title="UTwente" useTitleTemplate={true} noIndex={true} />
            <Page>
                <NormalSection sectionId="utwente" heading="University of Twente" />
            </Page>
        </>
    );
}
