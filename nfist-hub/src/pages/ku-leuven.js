import React from 'react';
import { NormalSection, Page, Seo } from 'dev-nfist-hub';

export default function KULPage() {
    return (
        <>
            <Seo title="KUL" useTitleTemplate={true} noIndex={true} />
            <Page>
                <NormalSection sectionId="ku-leuven" heading="KU Leuven" />
            </Page>
        </>
    );
}
