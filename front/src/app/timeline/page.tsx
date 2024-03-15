import { PageLayout } from '@/components/custom/page-layout'
import { Textarea } from '@/components/ui/textarea'

export default function Timeline() {
  return (
    <PageLayout>
      <section>
        <Textarea placeholder="Escreva seu post" />
      </section>
    </PageLayout>
  )
}
