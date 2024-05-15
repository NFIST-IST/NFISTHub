import React from 'react';
import { NormalSection, Page, Seo } from 'dev-nfist-hub';

export default function EPFLPage() {
    return (
        <>
            <Seo title="EPFL" useTitleTemplate={true} noIndex={true} />
            <Page>
                <NormalSection sectionId="epfl" heading="École Polytechnique Fédérale de Lausanne (EPFL)" />
            </Page>
        </>
    );
}
