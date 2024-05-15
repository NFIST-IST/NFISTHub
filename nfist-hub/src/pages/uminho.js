import React from 'react';
import { NormalSection, Page, Seo } from 'dev-nfist-hub';

export default function UMinhoPage() {
    return (
        <>
            <Seo title="UMinho" useTitleTemplate={true} noIndex={true} />
            <Page>
                <NormalSection sectionId="uminho" heading="Universidade do Minho" />
            </Page>
        </>
    );
}
