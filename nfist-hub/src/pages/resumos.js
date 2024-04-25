import React from 'react';
import { ResumosSection, Page, Seo } from 'dev-nfist-hub';

export default function ResumosPage() {
    return (
        <>
            <Seo title="Resumos" useTitleTemplate={true} noIndex={true} />
            <Page>
                <ResumosSection sectionId="resumos" heading="Resumos" />
            </Page>
        </>
    );
}
