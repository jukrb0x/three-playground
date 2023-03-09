import { Button, Page, Text } from '@geist-ui/core';
import { useNavigate } from 'react-router-dom';

export function NotFound() {
  const navigate = useNavigate();

  return (
    <Page className="text-center flex items-center">
      <Text h1>No man's land</Text>
      <Button onClick={() => navigate('/')} type="success">
        Go Big
      </Button>
      <Text span padding={1}>
        or
      </Text>
      <Button onClick={() => navigate('/')}>Go Home</Button>
    </Page>
  );
}
