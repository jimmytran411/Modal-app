import React from 'react';
import { render, screen } from '@testing-library/react';
import { Portal } from '../Portal';

describe('<Portal />', () => {
  it('should render in a different node', () => {
    render(
      <div>
        <h1 className="foo1">Foo 1</h1>
        <Portal>
          <h1 className="foo2">Foo 2</h1>
        </Portal>
      </div>
    );
    expect(screen.getByText(/foo 1/i)).toBeInTheDocument();
    expect(screen.getByText(/foo 2/i)).toBeInTheDocument();
  });

  it('should unmount when parent unmounts', () => {
    const Child = () => {
      return (
        <Portal>
          <div>Foo</div>
        </Portal>
      );
    };

    function Parent({ open }: { open: boolean }) {
      return <div>{open ? <Child /> : null}</div>;
    }

    const { rerender } = render(<Parent open={true} />);
    const foo = screen.getByText(/foo/i);
    expect(foo).toBeInTheDocument();
    rerender(<Parent open={false} />);
    expect(foo).not.toBeInTheDocument();
  });
});
