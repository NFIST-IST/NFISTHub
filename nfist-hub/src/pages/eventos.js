import React from 'react';
import { EventosSection, Page, Seo } from 'dev-nfist-hub';

export default function EventosPage() {
    return (
        <>
            <Seo title="Eventos" useTitleTemplate={true} noIndex={true} />
            <Page>
                <EventosSection sectionId="eventos" heading="Eventos" />
            </Page>
        </>
    );
}
