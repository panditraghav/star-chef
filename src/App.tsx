import { Button } from './components/Button'
import { Tag } from './components/Tag'

export default function App() {
    return (
        <div>
            <h1 className="text-8xl text-border">Hello World</h1>
            <Button variant="default" icon="add">
                Add
            </Button>
            <Button variant="link">View list</Button>
            <Button variant="secondary">Add</Button>
            <div className="my-4">
                <Tag variant="selected">Italian</Tag>
                <Tag variant="muted">Italian</Tag>
            </div>
        </div>
    )
}
