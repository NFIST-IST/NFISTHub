import React from 'react';
import { NormalSection, Page, Seo } from 'dev-nfist-hub';

export default function TUEPage() {
    return (
        <>
            <Seo title="UniRio" useTitleTemplate={true} noIndex={true} />
            <Page>
                <NormalSection sectionId="rio" heading="UniRio" />
            </Page>
        </>
    );
}
